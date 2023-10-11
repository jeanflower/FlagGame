'use client'

import { GameApp, gameModes, gameTypes, selectFromFour } from '@/App';
import ClientOnly from '@/ClientOnly';
import "./../../bootstrap/dist/css/bootstrap.css";
import { useSearchParams } from 'next/navigation';

export default function BSLAphabetGame() {

  const searchParams = useSearchParams();
  const mode = searchParams.get('mode')
  const level = searchParams.get('level')

  let defaultMode = selectFromFour;
  let chosenMode = gameModes.find((m) => {
    return m.name === mode;
  });
  // console.log(`chosenMode = ${chosenMode}`);
  let defaultLevel = 0;
  let chosenLevel = [0,1,2].find((l) => {
    return `${l}` === level;
  });


  return (<ClientOnly><GameApp
    defaultGameMode={
      chosenMode ? chosenMode.name : defaultMode
    }
    defaultGameType={gameTypes.bslAlphabet}
    defaultGameLevel={
      chosenLevel ? chosenLevel : defaultLevel
    }
  /></ClientOnly>);
}
