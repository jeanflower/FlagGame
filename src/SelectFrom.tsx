import { Component } from 'react';
import { images } from './images';
import { generateDisplayData } from './displayData';
import { generateRandomSelection } from './random';

let mySelectFromGame: SelectFromGame;
export function getSelectFromGame(): SelectFromGame{
  return mySelectFromGame;
}

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
    mySelectFromGame = this;
  }
  private setRandomSelection(){
    this.setState(
      generateRandomSelection(this.props.numFlagsShown)
    );
  }
  
  render(){
    // console.log(`rendering AppContent with props = ${JSON.stringify(this.props)}`);
    if(this.state.numbersSelected.length === 0){
      this.setRandomSelection();
      return (<h2>...</h2>);
    }

    const displayData = generateDisplayData();
    const imageKeys = Object.keys(images);
    return (
      <div>
      <h2>
        Select {this.state.correctPlace}
      </h2>
      <table>
      {displayData.rows.map(
        (row)=>{
          return (<tr>{row.map(
            (i)=>{
              return (<td>{
                <img
                key={i}
                src={images[imageKeys[i]].image}
                alt={images[imageKeys[i]].name}
                style={{padding: `${displayData.pad}px`}}
                width={displayData.tileWidth}
                height={'auto'}
                onClick={function(){
                  if(images[imageKeys[i]].name === mySelectFromGame.state.correctPlace){
                    // alert("WIN");
                    const newCurrentRun = mySelectFromGame.state.currentRun + 1;
                    let newBestRun = Math.max(mySelectFromGame.state.bestRun, newCurrentRun);
                    mySelectFromGame.setState({ 
                      key: Math.random(),
                      numbersSelected: [],
                      message: '',
                      numberTaps: mySelectFromGame.state.numberTaps + 1,
                      numberRight: mySelectFromGame.state.numberRight + 1,
                      currentRun: newCurrentRun,
                      bestRun: newBestRun,
                    });          
                  } else {
                    mySelectFromGame.setState({ 
                      message: `That was ${images[imageKeys[i]].name}`,
                      numberTaps: mySelectFromGame.state.numberTaps + 1,
                      currentRun: 0,
                      lastRun: mySelectFromGame.state.currentRun,
                    });
                  }
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
