import { Component } from 'react';
import { images } from './images';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';

interface SelectFromState {
  key: number;
  message: string;
  numbersSelected: number[];
  correctPlace: string;
  numberTaps: number;
  numberRight: number;
  currentRun: number;
  bestRun: number;
  lastRun: number;
}
interface SelectFromProps {
  numFlagsShown: number,
}

export class SelectFromGame extends Component<SelectFromProps, SelectFromState> { 
  public constructor(props: SelectFromProps) {    
    super(props);
    // console.log(`props for SelectFromGame ${JSON.stringify(props)}`);
    this.state = {
      key: Math.random(),
      message: '',
      numbersSelected: [],
      correctPlace: '',
      numberTaps: 0,
      numberRight: 0,
      currentRun: 0,
      bestRun: 0,
      lastRun: 0,
    }
    //mySelectFromGame = this;
  }
  private setRandomSelection(){
    // console.log(`generate random selection for SelectFromGame`);
    this.setState(
      generateRandomSelection(this.props.numFlagsShown)
    );
  }
  onClickWork(image: any){
    if(images[image].name === this.state.correctPlace){
      // alert("WIN");
      const newCurrentRun = this.state.currentRun + 1;
      let newBestRun = Math.max(this.state.bestRun, newCurrentRun);
      this.setState({ 
        key: Math.random(),
        numbersSelected: [],
        message: '',
        numberTaps: this.state.numberTaps + 1,
        numberRight: this.state.numberRight + 1,
        currentRun: newCurrentRun,
        bestRun: newBestRun,
      });          
    } else {
      this.setState({ 
        message: `That was ${images[image].name}`,
        numberTaps: this.state.numberTaps + 1,
        currentRun: 0,
        lastRun: this.state.currentRun,
      });
    }
  }
  
  render(){
    // console.log(`rendering SelectFromGame with props = ${JSON.stringify(this.props)}`);
    // console.log(`rendering SelectFromGame with state = ${JSON.stringify(this.state)}`);
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
                <img
                key={i}
                src={images[imageKeys[i]].image}
                alt={images[imageKeys[i]].name}
                style={{padding: `${displayData.pad}px`}}
                width={displayData.tileWidth}
                height={'auto'}
                onClick={()=>{
                  return this.onClickWork(imageKeys[i]);
                }}
                ></img>                
              }</td>);
            })}</tr>);
        })}
      </table>
      <h2>
        {this.state.message} 
      </h2>
      <h2>
        {this.state.numberTaps
        ? Math.floor((this.state.numberRight * 100)/this.state.numberTaps)
        : 0}% correct from {this.state.numberTaps} attempts
      </h2>
      <h2>
        Runs: current {this.state.currentRun}, previous {this.state.lastRun}, best {this.state.bestRun}
      </h2>
    </div>);
  }
}
