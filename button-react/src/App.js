import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<button onClick={this.props.clickHandler}>{this.props.caption}</button>        
    )}
}

class Counter extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {clickCounter: 0};
    this.btnClickCounterHandler = this.btnClickCounterHandler.bind(this);
    this.btnClickResetHandler = this.btnClickResetHandler.bind(this);
  }
  
  btnClickCounterHandler() {
    this.setState({clickCounter: this.state.clickCounter + 1});    
  };

  btnClickResetHandler() {
    this.setState({clickCounter: 0});    
  };
  
  render() {
      return (
        <>
           <h2>{this.state.clickCounter}</h2>
           <Button clickHandler={this.btnClickCounterHandler} caption="Click" />
           &nbsp;&nbsp;&nbsp;
           <Button clickHandler={this.btnClickResetHandler} caption="Reset" />
        </>
   )}
}

export default Counter;