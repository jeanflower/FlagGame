import './App.css';
import { Component } from 'react';

import { FlagNavBar } from './NavBar';
import { SelectFromGame } from './SelectFrom';
import { IdentifyAllGame } from './IdentifyAll';
import { getImages } from './images';

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

export class Game1 extends Component { 
  public constructor(props: any) {
    super(props);
  }
  render(){
    return ('Game1');
  }
}
export class Game2 extends Component { 
  public constructor(props: any) {
    super(props);
  }
  render(){
    return ('Game2');
  }
}
export class Game3 extends Component { 
  public constructor(props: any) {
    super(props);
  }
  render(){
    return ('Game3');
  }
}
export class Game4 extends Component { 
  public constructor(props: any) {
    super(props);
  }
  render(){
    return ('Game4');
  }
}

interface AppState {
  gameName: string;
  gameLevel: number;
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
    }
    myGameApp = this;
  }

  private getGameComponent(){
    if(this.state.gameName === selectFromFour){
      //return (<Game1/>)
      return (
        <SelectFromGame
          numFlagsShown={4}
          images={getImages(this.state.gameLevel)}
        >
        </SelectFromGame>
      );
    } else if(this.state.gameName === selectFromFifteen){
      // return (<Game2/>)
      return (
        <SelectFromGame
          numFlagsShown={15}
          images={getImages(this.state.gameLevel)}
        >
        </SelectFromGame>
      );
    } else if(this.state.gameName === identifyFour){
      // return (<Game3/>)
      return (
        <IdentifyAllGame
          numFlagsShown={4}
          images={getImages(this.state.gameLevel)}
        >
        </IdentifyAllGame>
      );
    } else if(this.state.gameName === identifyFifteen){
      // return (<Game4/>)
      return (
        <IdentifyAllGame
          numFlagsShown={15}
          images={getImages(this.state.gameLevel)}
        >
        </IdentifyAllGame>
      );
    } else {
      // console.log(`rendering default game`);
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
export default App;
