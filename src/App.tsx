import './App.css';
import { Component } from 'react';

import { FlagNavBar } from './NavBar';
import { getSelectFromGame, SelectFromGame } from './SelectFrom';

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
    getSelectFromGame().setState({
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
        <SelectFromGame
          numFlagsShown={4}
        >
        </SelectFromGame>
        </>
      );
    } else if(this.state.gameName === selectFromFifteen){
      return (
        <>
        <FlagNavBar
          myApp={this}
        />
        <SelectFromGame
          numFlagsShown={15}
        >
        </SelectFromGame>
        </>
      );
    } else {
      console.log(`rendering default game - unexpected!`);
      return (<>bug</>);
    }
  }
}
export default App;
