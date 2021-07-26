import "./App.css";
import React,{Fragment} from "react";


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)
  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0, 
      lastClearedIncrementer: null
    };
    this.incrementer = null;
  }  
    
  startClock() {
    this.incrementer = setInterval( () =>
      this.setState({
        counter: this.state.counter + 1
      })
    , 1000);
  }
  
  stopClock() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }
  
  resetClock() {
    clearInterval(this.incrementer);
    this.setState({
      counter: 0
    });
  }

  
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>{formattedSeconds(this.state.counter)}</h1>
        </div>
   
        <div className="btnContainer">
            {(this.state.counter === 0 ||
              this.incrementer === this.state.lastClearedIncrementer
                ? <input type='button' value="Start" onClick={this.startClock.bind(this)} />
                : <input type='button' value="Stop" onClick={this.stopClock.bind(this)} />
            )}
            <input type='button' value="Reset" onClick={this.resetClock.bind(this)} />
         </div>
        
   
      </Fragment>
    );
  }
}

export default App;


