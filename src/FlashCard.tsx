import { Component } from 'react';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';
import Image from 'next/image';
import { Button, Card } from 'react-bootstrap';
import { gameTypes } from './App';

interface FlashCardGameState {
  shuffledArray: number[],
  taskNum: number,
  start: Date;

  indexToShow: number;
  lastThree: number[];

  isMounted: boolean;
  showImage: boolean;
  currentRun: number;
  bestRun: number;
  lastRun: number;
}
interface FlashCardProps {
  images: any[],
  gameType: string,
  gameLevel: number,
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export class FlashCardGame extends Component<FlashCardProps, FlashCardGameState> {
  public constructor(props: FlashCardProps) {
    super(props);
    // console.log(`props for IdentifyAllGame ${JSON.stringify(props)}`);
    const lastThree = [-1, -1, -1];
    const randomSel = this.getRandomSelection(new Date(), lastThree);

    const numImages = this.props.images.length;
    const shuffledArray = [...Array(numImages).keys()];
    shuffleArray(shuffledArray);

    this.state = {

      indexToShow: randomSel.indexToShow,
      lastThree: lastThree,

      shuffledArray: shuffledArray,
      taskNum: 0,

      isMounted: false,
      showImage: this.showImageAtStart(),
      start: new Date(),
      currentRun: 0,
      bestRun: 0,
      lastRun: 0,
    }
  }

  private showImageAtStart() {
    return this.props.gameType === gameTypes.bslVideos
  }
  
  private getNameOfThing(){
    if(this.props.gameType === gameTypes.flagGame) {
      return 'flag';
    } else if(this.props.gameType === gameTypes.bslAlphabet) {
      return 'sign';
    } else if(this.props.gameType === gameTypes.indianDessertGame) {
      return 'dish';
    } else if(this.props.gameType === gameTypes.peppaPigGame) {
      return 'character';
    } else if(this.props.gameType === gameTypes.bslVideos) {
      return 'sign';
    } else {
      return 'thing'; // should never happen!
    }
  }

  private getNextImage(): any{
    const result = this.state.shuffledArray[this.state.taskNum];
    if(this.state.taskNum < this.state.shuffledArray.length - 1){
      this.setState({
        taskNum: this.state.taskNum + 1,
      });
      return result;
    }
    shuffleArray(this.state.shuffledArray);
    this.setState({
      taskNum: 0,
    });
    return result;
  }

  private getRandomSelection(
    start: Date,
    lastThree: number[],
  ){
    // console.log(`generate random selection for IdentifyAllGame`);
    const selection = generateRandomSelection(
      this.props.images,
      1,
      lastThree,
    );
    const now = new Date();
    const selectionWithGray = {
      indexToShow: selection.indicesToShow[0],
      activeFlagCard: this.props.images.map(()=>{
        return true;
      }),
      start: now,
      message: `Last game: ${
        Math.floor((now.getTime() - start.getTime())/100)/10} seconds`
    };
    return selectionWithGray;
  }

  revealImage(){
    this.setState({
      showImage: true,
    });
  }

  getNewGame(){
    const randomSel = this.getRandomSelection(new Date(), this.state.lastThree);
    this.getNextImage();
    this.setState({
      indexToShow: randomSel.indexToShow,
      showImage: this.showImageAtStart(),
    });
  }

  
  onClickRight(){
    console.log('clicked right');
    const newCurrentRun = this.state.currentRun + 1;
    let newBestRun = Math.max(this.state.bestRun, newCurrentRun);
    this.setState({
      showImage: this.showImageAtStart(),
      currentRun: newCurrentRun,
      bestRun: newBestRun,
  });
    this.getNewGame();
  }

  onClickWrong(){
    console.log('clicked wrong');
    this.setState({
      showImage: this.showImageAtStart(),
      currentRun: 0,
      lastRun: this.state.currentRun,
  });
    this.getNewGame();
  }

  componentDidMount(){
    console.log("Did mount called in IdentifyAll");
    this.setState({
        isMounted: true,
    });
  }

  render(){
    // console.log(`rendering IdentifyAllGame with props = ${JSON.stringify(this.props)}`);
    // console.log(`rendering IdentifyAllGame with state = ${JSON.stringify(this.state)}`);

    if(!this.state.isMounted) {
      return <></>;
    }

    let indexToShow = 0;
    if(this.props.gameLevel === 3){
      indexToShow = this.state.taskNum % this.props.images.length;
    } else if(this.props.gameLevel === 4){
      indexToShow = this.state.shuffledArray[this.state.taskNum];
    } else if(this.props.gameLevel === 5){
      indexToShow = this.state.indexToShow;
    }

    const displayData = generateDisplayData(
      [indexToShow],
      this.props.gameType,
    );

    // for this game, displayData will be one row of one number
    const i = displayData.rows[0][0];

    return (
      <div>
      <h4>
      What&apos;s the {this.getNameOfThing()} for {this.props.images[i].name}?
      </h4>
        <div 
          style={{
            padding: `${displayData.pad}px`,
          }}
        >
          {!this.state.showImage && 
          this.props.gameType !== gameTypes.bslVideos &&
          <Button 
            variant="primary"
            onClick={()=>this.revealImage()}
            disabled={this.state.showImage}
          >
            Reveal the answer
          </Button>
          }

          {this.state.showImage &&
            <div 
              style={{
                padding: `${displayData.pad}px`,
                backgroundColor: `grey`,
              }}
            >
            {this.props.images[i].image && 
            <Image
              key={`im${i}`}
              src={this.props.images[i].image}
              alt={this.props.images[i].name}
              style={{
                padding: `${displayData.pad}px`
              }}
              width={displayData.tileWidth}
            />}
            {this.props.images[i].embedCode && 
              <iframe 
                key={`iframe${this.props.images[i].name}`}
                height="410"
                width="100%"
                srcDoc={`<html>
                          <body>
                          ${this.props.images[i].embedCode}
                          </body>
                        </html>`}>
              </iframe>
            }
            </div>
          }

          <div>
            <Button
              key={`right`}
              onClick={()=>this.onClickRight()}
              variant={this.state.showImage ? "primary" : "secondary"}
            >
              I got this right!
            </Button>
            <Button
              key={`wrong`}
              onClick={()=>this.onClickWrong()}
              variant={this.state.showImage ? "primary" : "secondary"}
            >
              I need more practice...
            </Button>
          </div>
        </div>
      <h4>
        Runs: current {this.state.currentRun}, previous {this.state.lastRun}, best {this.state.bestRun}
      </h4>
    </div>);
  }
}
