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
    this.state = {clickCounter: this.props.counter ? parseInt(this.props.counter) : 0};
    this.btnClickCounterHandler = this.btnClickCounterHandler.bind(this);
    this.btnClickResetHandler = this.btnClickResetHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  
  btnClickCounterHandler() {
    this.setState({clickCounter: this.state.clickCounter + 1});    
  };

  btnClickResetHandler() {
    this.setState({clickCounter: 0});    
  };

  forceUpdateHandler(){
    this.forceUpdate();
  };
  
  render() {
    return (
      <>
          <h2 className="react-lbl"><span>{this.state.clickCounter}</span></h2>
          <Button clickHandler={this.btnClickCounterHandler} caption="Counter" />
          &nbsp;&nbsp;&nbsp;
          { this.state.clickCounter > 0 ? <Button clickHandler={this.btnClickResetHandler} caption="Reset in React" /> : null }
      </>
   )}
}

export default Counter;