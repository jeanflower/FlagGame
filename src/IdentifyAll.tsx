import { Component } from 'react';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';
import Image from 'next/image';
import { gameTypes } from './App';

interface IdentifyAllState {
  indicesToShow: number[];
  numbersLeft: number[];
  activeFlag: boolean[];
  correctIndex: string;
  highlightBorder: number;
  message: string;
  start: Date;
  lastThree: number[];
  isMounted: boolean;
}
interface IdentifyAllProps {
  numFlagsShown: number,
  images: any[],
  gameType: string,
}

export class IdentifyAllGame extends Component<IdentifyAllProps, IdentifyAllState> { 
  public constructor(props: IdentifyAllProps) {
    super(props);
    // console.log(`props for IdentifyAllGame ${JSON.stringify(props)}`);
    const lastThree = [-1, -1, -1];
    const randomSel = this.getRandomSelection(new Date(), lastThree);
    const correctIndex = this.newCorrectPlace(randomSel.numbersLeft);
    this.state = {
      ...randomSel,
      message: '',
      correctIndex: correctIndex,
      lastThree: lastThree,
      isMounted: false,
    }
  }
  private getRandomSelection(
    start: Date,
    lastThree: number[],
  ){
    // console.log(`generate random selection for IdentifyAllGame`);
    const selection = generateRandomSelection(
      this.props.images,
      this.props.numFlagsShown,
      lastThree,
    );
    const now = new Date();
    const selectionWithGray = {
      ...selection,
      activeFlag: this.props.images.map(()=>{
        return true;
      }),
      numbersLeft: [...selection.indicesToShow],
      highlightBorder: -1,
      start: now,
      message: `Last game: ${
        Math.floor((now.getTime() - start.getTime())/100)/10} seconds`
    };
    return selectionWithGray;
  }

  newCorrectPlace(numbersLeft: number[]){
    const oneLeftIndex = Math.floor(
      Math.random() * numbersLeft.length
    );
    // console.log(`oneLeftIndex = ${oneLeftIndex}`);
    const imageIndex = numbersLeft[oneLeftIndex];
    // console.log(`imageIndex = ${imageIndex}`);
    return this.props.images[imageIndex].name;
  }

  onClickWork(i: number){
    if(this.props.images[i].name === this.state.correctIndex){
      // alert("WIN");
      // console.log(`colour ${i}th flag gray`);
      const newActiveFlag = [...this.state.activeFlag];
      newActiveFlag[i] = false;
      const index = this.state.numbersLeft.indexOf(i);
      if (index > -1) {
        this.state.numbersLeft.splice(index, 1);
        // console.log(`this.state.numbersLeft = ${this.state.numbersLeft}`);
      }

      if(this.state.numbersLeft.length >= 1){
        this.setState({
          activeFlag: newActiveFlag,
          numbersLeft: this.state.numbersLeft,
          correctIndex: this.newCorrectPlace(this.state.numbersLeft),
          highlightBorder: -1,
        });
      } else {
        // console.log(`reset task`);
        this.setState(
          {...this.getRandomSelection(
            this.state.start,
            this.state.lastThree,
          ),
          highlightBorder: -1,
          }
        );        
      }
    } else {
      this.setState({
        highlightBorder: i,
      });
    }
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

    if(this.props.gameType === gameTypes.bslVideos) {
      return <>Sorry, this game style doesn't work with the BSL Video game</>
    }

    const displayData = generateDisplayData(
      this.state.indicesToShow,
      this.props.gameType,
    );

    return (
      <div>
      <h2>
        Select {this.state.correctIndex}
      </h2>
      <table>
      <tbody>
      {displayData.rows.map(
        (row: number[])=>{
          return (
          <tr
            key={`tr${JSON.stringify(row)}`}
          >{row.map(
            (i: number)=>{
              return (
                <td
                  key={`td${i}`}
                >{
                <div 
                  style={{
                    padding: `${displayData.pad}px`,
                    backgroundColor: `${this.state.highlightBorder === i?'red':'grey'}`
                  }}
                >
                <Image
                  key={`im${i}`}
                  src={this.props.images[i].image}
                  alt={this.props.images[i].name}
                  style={{
                    padding: `${displayData.pad}px`,
                    filter: `grayscale(${this.state.activeFlag[i]?0:90}%)`,
                    opacity: `${this.state.activeFlag[i]?1:0.5}`
                  }}
                  width={displayData.tileWidth}
                  height={0.4 * displayData.tileWidth}
                  onClick={()=>this.onClickWork(i)}
                />
                </div>
              }</td>);
            })
          }</tr>);
        })}
      </tbody>
      </table>
      <h2>{this.state.message}</h2>
    </div>);
  }
}
