'use client'

import { GameApp, gameTypes } from '@/App';
import ClientOnly from '@/ClientOnly';
import "./../../bootstrap/dist/css/bootstrap.css";

export default function FlagGame() {
  return (<ClientOnly><GameApp
    defaultGameType={gameTypes.bslAlphabet}
  /></ClientOnly>);
}
