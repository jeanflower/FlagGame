import { Component } from 'react';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';
import Image from 'next/image';
import { Button, Card } from 'react-bootstrap';
import { gameTypes } from './App';

interface FlashCardGameState {
  indexToShow: number;
  start: Date;
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
}

export class FlashCardGame extends Component<FlashCardProps, FlashCardGameState> { 
  public constructor(props: FlashCardProps) {
    super(props);
    // console.log(`props for IdentifyAllGame ${JSON.stringify(props)}`);
    const lastThree = [-1, -1, -1];
    const randomSel = this.getRandomSelection(new Date(), lastThree);
    this.state = {
      ...randomSel,
      lastThree: lastThree,
      isMounted: false,
      showImage: false,
      currentRun: 0,
      bestRun: 0,
      lastRun: 0,
    }
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

  onClickImage(){
    this.setState({
      showImage: false,
    })
  }
  revealImage(){
    this.setState({
      showImage: true,
    })
  }

  getNewGame(){
    const randomSel = this.getRandomSelection(new Date(), this.state.lastThree);
    this.setState({
      indexToShow: randomSel.indexToShow,
      showImage: false,
    });
  }

  
  onClickRight(){
    console.log('clicked right');
    const newCurrentRun = this.state.currentRun + 1;
    let newBestRun = Math.max(this.state.bestRun, newCurrentRun);
    this.setState({
      showImage: false,
      currentRun: newCurrentRun,
      bestRun: newBestRun,
  });
    this.getNewGame();
  }

  onClickWrong(){
    console.log('clicked wrong');
    this.setState({
      showImage: false,
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

    const displayData = generateDisplayData(
      [this.state.indexToShow],
      this.props.gameType,
    );

    // for this game, displayData will be one row of one number
    const i = displayData.rows[0][0];

    return (
      <div>
      <h3>
      What&apos;s the {this.getNameOfThing()} for {this.props.images[i].name}?
      </h3>
        <div 
          style={{
            padding: `${displayData.pad}px`,
          }}
        >
          {!this.state.showImage &&
          <Button 
            variant="primary"
            onClick={()=>this.revealImage()}
            disabled={this.state.showImage}
          >
            Reveal
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
                srcDoc={`<html>
                          <body>
                          ${/*<blockquote class="signbsldata-embed" data-vidref="vyweujxrb6"><a href="https://www.signbsl.com/sign/good-morning">Watch how to sign 'good morning' in British Sign Language</a></blockquote><script async src="https://embed.signbsl.com/widgets.js" charset="utf-8"></script>*/""}
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
              key={`right`}
              onClick={()=>this.onClickWrong()}
              variant={this.state.showImage ? "primary" : "secondary"}
            >
              I need more practice...
            </Button>
          </div>
        </div>
      <h3>
        Runs: current {this.state.currentRun}, previous {this.state.lastRun}, best {this.state.bestRun}
      </h3>
    </div>);
  }
}
