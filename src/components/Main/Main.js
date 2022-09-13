import React from 'react';

import './Main.css';
import { zodiac } from '../../data.js';

import Zodiac from '../Zodiac/Zodiac.js';
import background from '../../background.png';
export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }} className="App">
      {zodiac.map((sign) => (
        <Zodiac key={sign.name} {...sign} />
      ))}
    </main>
  );
}
