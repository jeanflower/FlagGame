'use client'

import { GameApp, gameModes, gameTypes, selectFromFour } from '@/App';
import ClientOnly from '@/ClientOnly';
import "./../../bootstrap/dist/css/bootstrap.css";
import { useSearchParams } from 'next/navigation';

export default function FlagGame() {

  const searchParams = useSearchParams();
  const mode = searchParams.get('mode')

  let defaultMode = selectFromFour;
  let chosenMode = gameModes.find((m) => {
    return m.name === mode;
  });
  // console.log(`chosenMode = ${chosenMode}`);

  return (<ClientOnly><GameApp
    defaultGameMode={
      chosenMode ? chosenMode.name : defaultMode
    }
    defaultGameType={
      gameTypes.flagGame
    }

  /></ClientOnly>);
}
