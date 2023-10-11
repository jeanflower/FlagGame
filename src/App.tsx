'use client'

import './App.css';
import { Component } from 'react';

import { MyNavBar } from './NavBar';
import { SelectFromGame } from './SelectFrom';
import { IdentifyAllGame } from './IdentifyAll';
import { getFlagImages } from './flagImages';
import { getIndianDessertImages } from "./indianDessertImages";
import { getPeppaPigImages } from './peppaPigImages';
import { getBSLAlphabetImages } from "./bSLImages";
import { FlashCardGame } from './FlashCard';
import { StaticImageData } from 'next/image';

export const selectFromFour = 'selectFromFour';
export const selectFromFifteen = 'selectFromFifteen';
export const identifyFour = 'identifyFour';
export const identifyFifteen = 'identifyFifteen';
export const flashCard = 'flashCard';

export type MediaData = {
    code: string|undefined,
    level: number,
    image: StaticImageData,
    name: string,
};

export const gameModes = [
  {
    name: selectFromFour,
    screenName: 'Select from 4',
  }, 
  {
    name: selectFromFifteen,
    screenName: 'Select from 15',
  },
  {
    name: identifyFour,
    screenName: 'Identify 4',
  }, 
  {
    name: identifyFifteen,
    screenName: 'Identify 15',
  }, 
  {
    name: flashCard,
    screenName: 'Flash cards',
  },
];

export const gameTypes = {
  flagGame: "FlagGame",
  indianDessertGame: "IndianDessertGame",
  peppaPigGame: "PeppaPigGame",
  bslAlphabet: "bslAlphabet",
}

interface AppState {
  gameMode: string;
  gameLevel: number;
  gameType: string;
}
interface AppProps {
  defaultGameMode: string;
  defaultGameType: string;
}
let myGameApp: GameApp;
export class GameApp extends Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      gameMode: props.defaultGameMode,
      gameLevel: 0,
      gameType: props.defaultGameType,
    }
    myGameApp = this;
  }

  private getImages():MediaData[]{
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

  private getNavBarTitle(){
    if(this.props.defaultGameType === gameTypes.flagGame){
      return 'Flags Galore';
    } else if(this.props.defaultGameType === gameTypes.bslAlphabet){
      return 'BSL Alphabet challenge';
    } else if(this.props.defaultGameType === gameTypes.indianDessertGame){
      return 'Indian desserts';
    } else if(this.props.defaultGameType === gameTypes.peppaPigGame){
      return 'Peppa pig characters';
    } else {
      return 'Flags Galore';
    }
  }
  private getGameComponent(){
    if(this.state.gameMode === selectFromFour){
      return (
        <SelectFromGame
          numFlagsShown={4}
          images={this.getImages()}
          gameType={this.state.gameType}
        />
      );
    } else if(this.state.gameMode === selectFromFifteen){
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
    } else if(this.state.gameMode === identifyFour){
      return (
        <IdentifyAllGame
          numFlagsShown={4}
          images={this.getImages()}
          gameType={this.state.gameType}
        />
      );
    } else if(this.state.gameMode === identifyFifteen){
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
    } else if(this.state.gameMode === flashCard){
      return (
        <FlashCardGame
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
      <MyNavBar
        title={this.getNavBarTitle()}
      />
      {this.getGameComponent()}
      </>
    );
  }
}
export function setGame(name: string){
  //console.log(`setting game ${name}`);
  myGameApp.setState(
    {
      gameMode: 'none',
    }, ()=>{
    myGameApp.setState(
      {
        gameMode: name,
      }
      )
    }
  )
}
export function setLevel(l: number){
  //console.log(`setting game ${name}`);
  const gameName = myGameApp.state.gameMode;
  myGameApp.setState(
    {
      gameMode: 'none',
    }, ()=>{
    console.log(`set game level to ${l}`);
    myGameApp.setState(
      {
        gameLevel: l,
        gameMode: gameName,
      }
    )}
  );
}
export function setGameType(type: string){
  //console.log(`setting game ${name}`);
  const gameName = myGameApp.state.gameMode;
  myGameApp.setState(
    {
      gameMode: 'none',
    }, ()=>{
    myGameApp.setState(
      {
        gameType: type,
        gameMode: gameName,
      }
    )}
  );
}
