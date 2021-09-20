import React from 'react';
import './App.css';
import NewComp from './Components/NewComp';



class App extends React.Component{
  styles={
    color: "teal"
  };
  render()
  {
    return(
      <div className="App">
        <h1 style={this.styles}>welcome</h1>
        <NewComp name="maria"/> 
      </div>
    );
  }
}

export default App;
