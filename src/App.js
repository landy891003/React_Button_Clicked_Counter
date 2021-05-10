import logo from './logo.svg';
import React from 'react';

class CounterButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter:0
    }
    this.handleClick = this.handleClick.bind(this)
  }
handleClick(event){
  this.setState({counter:this.state.counter+1});
  console.log(event.target); 
}
render(){
  var text = this.state.counter;
  return(<button onClick ={this.handleClick}>被點了{text}次</button>);
  }
}

export default CounterButton;
