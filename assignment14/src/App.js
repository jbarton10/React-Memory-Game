import React from 'react';
import './App.css';
import TitleBar from "./components/titlebar"

import GuessBox from "./components/guessBox"
import { thisExpression } from '@babel/types';

class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    message: "Click an Image to Begin!"
}

render(){
  return (
    <>
    <TitleBar score= {this.state.score} topScore={this.state.topScore} message={this.state.message}/>
    <GuessBox score= {this.state.score} topScore={this.state.topScore} message={this.state.message}/>
    </>
  )
}
  

  
}

export default App;
