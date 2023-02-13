import axios from 'axios';
import React from 'react';
import './App.css';
//import axios from'axios';

class App extends React.Component{
  state = { advice : '',};
  componentDidMount() {
    console.log('Component did mount');
    this.fetchAdvice();
  }
  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=> {
      const { advice } = response.data.slip;
      this.setState({ advice });
      //this.setState({advice: advice});
      console.log(advice);
    })
    .catch((error) => {
        console.log(error);
    })
    //axios is a client library. cliennt library enables application to connect and fetch data from http server through js
  
  } 
  render(){
    const { advice } = this.state;
    return(
      <div className = "app">
        <div className = "card">
        <h1 className = "heading">{advice} </h1>
        <button className = "button" onClick={this.fetchAdvice }>
          <span>GIVE ME ADVICE</span>
        </button>
        </div>
      </div>
     // <h1>{advice}</h1>
    );
  }
}

export default App;