import React from 'react';
import './App.css';
import TitleBar from "./components/titlebar"
import ImageDiv from "./components/imageDiv"
import GuessBox from "./components/guessBox"

function App() {
  return [<TitleBar />,
    <GuessBox />
  ];
  // return <ImageDiv />
  
}

export default App;
