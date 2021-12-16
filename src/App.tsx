import './App.css';
import { Component } from 'react';

import { FlagNavBar } from './NavBar';
import { images } from './images';
const imageKeys = Object.keys(images);

const selectFromFour = 'Select from 4';
const selectFromFifteen = 'Select from 15';
export const gameNames = [
  selectFromFour,
  selectFromFifteen,
];

function App() {
  return (
    <GameApp
    >
    </GameApp>
  );
}

interface AppState {
  gameName: string;
}
interface AppProps {
}
export class GameApp extends Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      gameName: selectFromFour,
    }
  }
  public setGame(name: string){
    //console.log(`setting game ${name}`);
    this.setState({
      gameName: name,
    });
    myAppContent.setState({
      numbersSelected: [],
    });
  }  
  render() {
    //console.log(`rendering App with state ${JSON.stringify(this.state)}`);
    if(this.state.gameName === selectFromFour){
      return (
        <>
        <FlagNavBar
          myApp={this}
        />
        <AppContent
          numFlagsShown={4}
        >
        </AppContent>
        </>
      );
    } else if(this.state.gameName === selectFromFifteen){
      return (
        <>
        <FlagNavBar
          myApp={this}
        />
        <AppContent
          numFlagsShown={15}
        >
        </AppContent>
        </>
      );
    } else {
      console.log(`rendering default game - unexpected!`);
      return (<>bug</>);
    }
  }
}
export default App;

let myAppContent: AppContent;

interface AppContentState {
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
interface AppContentProps {
  numFlagsShown: number,
}

export class AppContent extends Component<AppContentProps, AppContentState> { 
  public constructor(props: AppContentProps) {
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
    myAppContent = this;
  }
  
  render(){
    // console.log(`rendering AppContent with props = ${JSON.stringify(this.props)}`);
    if(this.state.numbersSelected.length === 0){
      const numFlagsTotal = imageKeys.length;
      const numbersSelected: number[] = [];

      for(let i = 0; i < this.props.numFlagsShown; i = i + 1){
        let randNum = Math.random();
        randNum = Math.floor(randNum * (numFlagsTotal - i));
        // console.log(`randNum = ${randNum}`);
        let sorted:number[] = [];
        sorted = sorted.concat(numbersSelected);
        sorted.sort((a,b)=>{return a<b?-1:1});
        // console.log(`sorted = ${sorted}`);
        for(let j = 0; j < i; j = j + 1){
          // console.log(`check ${randNum} against ${sorted[j]}`);
          if(randNum >= sorted[j]){
            // console.log(`${randNum} >= ${sorted[j]} so add one`);
            randNum = randNum + 1;
          }
        }
        numbersSelected.push(randNum);
        // console.log(`numbersSelected = ${numbersSelected}`);
      }
      // console.log(numbersSelected);

      const correctOne = Math.floor(Math.random() * this.props.numFlagsShown);
      const correctPlace = images[imageKeys[numbersSelected[correctOne]]].name;
      this.setState({
        numbersSelected: numbersSelected,
        correctPlace: correctPlace,
      });
      return (<h2>...</h2>);
    }

    const width = window.innerWidth;
    console.log(`screen width ${width}`);
    const numTiles = myAppContent.state.numbersSelected.length;

    // make an array of rows
    // from myAppContent.state.numbersSelected
    let numRows = 1;
    let maxTileWidth = 200;
    if(numTiles === 4){
      if(width < 800){
        numRows = 2;
      }
    } else if(numTiles === 15){
      maxTileWidth = 150;
      numRows = 5;
    }
    console.log(`numRows = ${numRows}`);
    const rows = [];
    const rowLength = numTiles / numRows;
    console.log(`rowLength = ${rowLength}`);
    for(let i = 0; i < numRows; i++){
      console.log(`slice from = ${i * rowLength} to ${i * (rowLength + 1)}`);
      const subRow = myAppContent.state.numbersSelected.slice(i * rowLength, (i + 1) * rowLength);
      console.log(`subRow = ${subRow}`);
      rows.push(subRow);
    }
    console.log(`rows = ${JSON.stringify(rows)}`);

    const pad = 10;
    
    const tileWidth = Math.min(maxTileWidth, width / rowLength - 2 * pad);

    console.log(`tileWidth = ${tileWidth}`)
    return (
      <div>
      <h2>
        Select {this.state.correctPlace}
      </h2>
      <table>
      {rows.map(
        (row)=>{
          return (<tr>{row.map(
            (i)=>{
              return (<td>{
                <img
                key={i}
                src={images[imageKeys[i]].image}
                alt={images[imageKeys[i]].name}
                style={{padding: '2px'}}
                width={tileWidth}
                height={'auto'}
                onClick={function(){
                  if(images[imageKeys[i]].name === myAppContent.state.correctPlace){
                    // alert("WIN");
                    const newCurrentRun = myAppContent.state.currentRun + 1;
                    let newBestRun = Math.max(myAppContent.state.bestRun, newCurrentRun);
                    myAppContent.setState({ 
                      key: Math.random(),
                      numbersSelected: [],
                      message: '',
                      numberTaps: myAppContent.state.numberTaps + 1,
                      numberRight: myAppContent.state.numberRight + 1,
                      currentRun: newCurrentRun,
                      bestRun: newBestRun,
                    });          
                  } else {
                    myAppContent.setState({ 
                      message: `That was ${images[imageKeys[i]].name}`,
                      numberTaps: myAppContent.state.numberTaps + 1,
                      currentRun: 0,
                      lastRun: myAppContent.state.currentRun,
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

