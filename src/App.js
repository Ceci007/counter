import React, { Component } from "react";
import NavBar from "./components/navbar"; 
import Counters from "./components/counters";
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id : 1, value: 0}, //4
      { id : 2, value: 0},
      { id : 3, value: 0},
      { id : 4, value: 0},
      { id : 5, value: 0}
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log(counters[index]);
    this.setState({counters});
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if(counters[index].value > 0)
    {
      counters[index].value--;
    }
    console.log(counters[index]);
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };

  render(){
  return (
    <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length} />
      <main className = "d-flex justify-content-center">
        <Counters 
          counters = {this.state.counters}
          onReset = {this.handleReset} 
          onIncrement = {this.handleIncrement} 
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete} 
          />
      </main>
    </React.Fragment>
  ); 
  }
}

export default App;
