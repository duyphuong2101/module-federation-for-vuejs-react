import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<button onClick={this.props.clickHandler}>Click</button>        
    )}
}

class Counter extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {clickCounter: 0};
    this.btnClickHandler = this.btnClickHandler.bind(this);
  }
  
  btnClickHandler() {
    this.setState({clickCounter: this.state.clickCounter + 1});    
  };
  
  render() {
      return (
        <>
           <h2>{this.state.clickCounter}</h2>
           <Button clickHandler={this.btnClickHandler} />
        </>
   )}
}

