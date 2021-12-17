import './App.css';
import { Component } from 'react';

import { FlagNavBar } from './NavBar';
import { SelectFromGame } from './SelectFrom';
import { IdentifyAllGame } from './IdentifyAll';
import { getFlagImages } from './flagImages';
import { getIndianDesertImages } from "./indianDesertImages";
import { getPeppaPigImages } from './peppaPigImages';

const selectFromFour = 'Select from 4';
const selectFromFifteen = 'Select from 15';
const identifyFour = 'Identify 4';
const identifyFifteen = 'Identify 15';
export const gameNames = [
  selectFromFour,
  selectFromFifteen,
  identifyFour,
  identifyFifteen,
];

function App() {
  return (
    <GameApp
    >
    </GameApp>
  );
}

export const FlagGame = 0;
export const IndianDesertGame = 1;
export const PeppaPigGame = 2;

interface AppState {
  gameName: string;
  gameLevel: number;
  gameType: number;
}
interface AppProps {
}
let myGameApp: GameApp;
export class GameApp extends Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      gameName: selectFromFour,
      gameLevel: 0,
      gameType: FlagGame,
    }
    myGameApp = this;
  }

  private getImages():{
    level: number,
    image: any,
    name: string,
  }[]{
    if(this.state.gameType === FlagGame) {
      return getFlagImages(this.state.gameLevel);
    } else if(this.state.gameType === IndianDesertGame) {
      return getIndianDesertImages(this.state.gameLevel);
    } else if(this.state.gameType === PeppaPigGame) {
      return getPeppaPigImages(this.state.gameLevel);
    } else {
      return getFlagImages(this.state.gameLevel);
    } 
  }

  private getGameComponent(){
    if(this.state.gameName === selectFromFour){
      return (
        <SelectFromGame
          numFlagsShown={4}
          images={this.getImages()}
        >
        </SelectFromGame>
      );
    } else if(this.state.gameName === selectFromFifteen){
      if(this.getImages().length < 15){
        return <h2>Not enough data to select from 15</h2>
      }
      return (
        <SelectFromGame
          numFlagsShown={15}
          images={this.getImages()}
        >
        </SelectFromGame>
      );
    } else if(this.state.gameName === identifyFour){
      return (
        <IdentifyAllGame
          numFlagsShown={4}
          images={this.getImages()}
        >
        </IdentifyAllGame>
      );
    } else if(this.state.gameName === identifyFifteen){
      if(this.getImages().length < 15){
        return <h2>Not enough data to identify 15</h2>
      }
      return (
        <IdentifyAllGame
          numFlagsShown={15}
          images={this.getImages()}
        >
        </IdentifyAllGame>
      );
    } else {
      // console.log(`rendering no game`);
      return (<>inbetween games</>);
    }
  }
  render() {
    // console.log(`rendering App with state ${JSON.stringify(this.state)}`);
    return (
      <>
      <FlagNavBar/>
      {this.getGameComponent()}
      </>
    );
  }
}
export function setGame(name: string){
  //console.log(`setting game ${name}`);
  myGameApp.setState(
    {
      gameName: 'none',
    }, ()=>{
    myGameApp.setState(
      {
        gameName: name,
      }
      )
    }
  )
}
export function setLevel(l: number){
  //console.log(`setting game ${name}`);
  const gameName = myGameApp.state.gameName;
  myGameApp.setState(
    {
      gameName: 'none',
    }, ()=>{
    myGameApp.setState(
      {
        gameLevel: l,
        gameName: gameName,
      }
    )}
  );
}
export function setGameType(type: number){
  //console.log(`setting game ${name}`);
  const gameName = myGameApp.state.gameName;
  myGameApp.setState(
    {
      gameName: 'none',
    }, ()=>{
    myGameApp.setState(
      {
        gameType: type,
        gameName: gameName,
      }
    )}
  );
}
export default App;
