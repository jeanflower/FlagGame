'use client'

import './App.css';
import { Component } from 'react';

import { FlagNavBar } from './NavBar';
import { SelectFromGame } from './SelectFrom';
import { IdentifyAllGame } from './IdentifyAll';
import { getFlagImages } from './flagImages';
import { getIndianDessertImages } from "./indianDessertImages";
import { getPeppaPigImages } from './peppaPigImages';
import { getBSLAlphabetImages } from "./bSLImages";

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

export const gameTypes = {
  flagGame: "FlagGame",
  indianDessertGame: "IndianDessertGame",
  peppaPigGame: "PeppaPigGame",
  bslAlphabet: "bslAlphabet",
}

interface AppState {
  gameName: string;
  gameLevel: number;
  gameType: string;
}
interface AppProps {
  defaultGameType: string;
}
let myGameApp: GameApp;
export class GameApp extends Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      gameName: selectFromFour,
      gameLevel: 0,
      gameType: props.defaultGameType,
    }
    myGameApp = this;
  }

  private getImages():{
    level: number,
    image: any,
    name: string,
  }[]{
    // console.log(`looking for level ${this.state.gameLevel} images`);

    let result;
    if(this.state.gameType === gameTypes.flagGame) {
      result = getFlagImages(this.state.gameLevel);
    } else if(this.state.gameType === gameTypes.indianDessertGame) {
      result = getIndianDessertImages(this.state.gameLevel);
    } else if(this.state.gameType === gameTypes.peppaPigGame) {
      result = getPeppaPigImages(this.state.gameLevel);
    } else if(this.state.gameType === gameTypes.bslAlphabet) {
      result = getBSLAlphabetImages(this.state.gameLevel);
    } else {
      result = getFlagImages(this.state.gameLevel);
    } 
    // console.log(`returning ${result.length} images`);
    return result;
  }

  private getGameComponent(){
    if(this.state.gameName === selectFromFour){
      return (
        <SelectFromGame
          numFlagsShown={4}
          images={this.getImages()}
          gameType={this.state.gameType}
        />
      );
    } else if(this.state.gameName === selectFromFifteen){
      if(this.getImages().length < 15){
        return <h2>Not enough data to select from 15</h2>
      }
      return (
        <SelectFromGame
          numFlagsShown={15}
          images={this.getImages()}
          gameType={this.state.gameType}
        />
      );
    } else if(this.state.gameName === identifyFour){
      return (
        <IdentifyAllGame
          numFlagsShown={4}
          images={this.getImages()}
          gameType={this.state.gameType}
        />
      );
    } else if(this.state.gameName === identifyFifteen){
      if(this.getImages().length < 15){
        return <h2>Not enough data to identify 15</h2>
      }
      return (
        <IdentifyAllGame
          numFlagsShown={15}
          images={this.getImages()}
          gameType={this.state.gameType}
        />
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
    console.log(`set game level to ${l}`);
    myGameApp.setState(
      {
        gameLevel: l,
        gameName: gameName,
      }
    )}
  );
}
export function setGameType(type: string){
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
