'use client'

import { gameTypes } from "./App";

export function generateDisplayData(
  indicesToShow: number[],
  gameType: string,
): {
  rows: number[][],
  pad: number,
  tileWidth: number,
}{
  if (window === undefined) {
    return {
      rows: [],
      pad: 0,
      tileWidth: 0,
    };  ;
  }
  const width = window.innerWidth;
  // console.log(`screen width ${width}`);
  const numTiles = indicesToShow.length;
  // make an array of rows
  // from myAppContent.state.indicesToShow
  let numRows = 1;
  let maxTileWidth = 200;
  if(numTiles === 4){
    if(width < 800){
      numRows = 2;
    } 
  } else if(numTiles === 15){
    if(gameType === gameTypes.peppaPigGame){
      numRows = 3;
      maxTileWidth = 120;
    } else if(gameType === gameTypes.bslAlphabet){
      if(width > 600){
        numRows = 3;
        maxTileWidth = 160;
      } else {
        numRows = 5;
        maxTileWidth = 110;
      }
    } else {
      numRows = 5;
      maxTileWidth = 150;
    }
  }
  // console.log(`numRows = ${numRows}`);
  const rows = [];
  const rowLength = numTiles / numRows;
  // console.log(`rowLength = ${rowLength}`);
  for(let i = 0; i < numRows; i++){
    // console.log(`slice from = ${i * rowLength} to ${i * (rowLength + 1)}`);
    const subRow = indicesToShow.slice(i * rowLength, (i + 1) * rowLength);
    // console.log(`subRow = ${subRow}`);
    rows.push(subRow);
  }
  // console.log(`rows = ${JSON.stringify(rows)}`);

  const pad = 2;
  
  const tileWidth = Math.min(maxTileWidth, width / rowLength - 2 * pad);
  return {
    rows: rows,
    pad: pad,
    tileWidth: tileWidth,
  };  
}