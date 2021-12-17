import { Component } from 'react';
import { images } from './images';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';

interface IdentifyAllState {
  numbersSelected: number[];
  numbersLeft: number[];
  activeFlag: boolean[];
  correctPlace: string;
  highlightBorder: number;
  message: string;
  start: Date;
}
interface IdentifyAllProps {
  numFlagsShown: number,
}

export class IdentifyAllGame extends Component<IdentifyAllProps, IdentifyAllState> { 
  public constructor(props: IdentifyAllProps) {
    super(props);
    // console.log(`props for IdentifyAllGame ${JSON.stringify(props)}`);
    this.state = {
      numbersSelected: [],
      numbersLeft: [],
      activeFlag: [],
      correctPlace: '',
      highlightBorder: -1,
      message: '',
      start: new Date(),
    }
  }
  private setRandomSelection(){
    // console.log(`generate random selection for IdentifyAllGame`);
    const selection = generateRandomSelection(this.props.numFlagsShown);
    const now = new Date();
    const selectionWithGray = {
      ...selection,
      activeFlag: Object.keys(images).map(()=>{
        return true;
      }),
      numbersLeft: [...selection.numbersSelected],
      highlightBorder: -1,
      start: now,
      message: `Last game: ${
        Math.floor((now.getTime() - this.state.start.getTime())/100)/10} seconds`
    };
    this.setState(
      selectionWithGray
    );
  }
  onClickWork(i: number, image: any){
    if(images[image].name === this.state.correctPlace){
      // alert("WIN");
      // console.log(`colour ${i}th flag gray`);
      this.state.activeFlag[i] = false;
      const index = this.state.numbersLeft.indexOf(i);
      if (index > -1) {
        this.state.numbersLeft.splice(index, 1);
        // console.log(`this.state.numbersLeft = ${this.state.numbersLeft}`);
      }

      let newCorrectPlace = "WON!";
      if(this.state.numbersLeft.length >= 1){
        const oneLeftIndex = Math.floor(
          Math.random() * this.state.numbersLeft.length
        );
        // console.log(`oneLeftIndex = ${oneLeftIndex}`);
        const imageIndex = this.state.numbersLeft[oneLeftIndex];
        // console.log(`imageIndex = ${imageIndex}`);
        const imageKeys = Object.keys(images);
        newCorrectPlace = images[imageKeys[imageIndex]].name;      
        this.setState({
          activeFlag: this.state.activeFlag,
          numbersLeft: this.state.numbersLeft,
          correctPlace: newCorrectPlace,
          highlightBorder: -1,
        });
      } else {
        // console.log(`reset task`);
        this.setRandomSelection();
      }
    } else {
      this.setState({
        highlightBorder: i,
      });
    }
  }

  render(){
    // console.log(`rendering IdentifyAllGame with props = ${JSON.stringify(this.props)}`);
    // console.log(`rendering IdentifyAllGame with state = ${JSON.stringify(this.state)}`);
    if(this.state.numbersSelected.length === 0){
      this.setRandomSelection();
      return (<h2>...</h2>);
    }

    const displayData = generateDisplayData(this.state.numbersSelected);
    const imageKeys = Object.keys(images);
    return (
      <div>
      <h2>
        Select {this.state.correctPlace}
      </h2>
      <table>
      {displayData.rows.map(
        (row: number[])=>{
          return (<tr>{row.map(
            (i: number)=>{
              return (<td>{
                <div 
                  style={{
                    padding: `${displayData.pad}px`,
                    backgroundColor: `${this.state.highlightBorder === i?'red':'grey'}`
                  }}
                >
                <img
                  key={i}
                  src={images[imageKeys[i]].image}
                  alt={images[imageKeys[i]].name}
                  style={{
                    padding: `${displayData.pad}px`,
                    filter: `grayscale(${this.state.activeFlag[i]?0:90}%)`,
                    opacity: `${this.state.activeFlag[i]?1:0.5}`
                  }}
                  width={displayData.tileWidth}
                  height={'auto'}
                  onClick={()=>this.onClickWork(i, imageKeys[i])}
                ></img>
                </div>
              }</td>);
            })
          }</tr>);
        })}
      </table>
      <h2>{this.state.message}</h2>
    </div>);
  }
}
