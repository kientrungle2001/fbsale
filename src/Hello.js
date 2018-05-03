import React, { Component } from 'react';

function Goodbye (props){	
	return (
		<h3>{props.message}</h3>
	);
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
	this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  tick() {
	  
	  this.setState({
		  date: new Date()
	  });
  }

  componentWillUnmount() {
	clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Hello extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
		{this.renderGoodbye("Chao tam biet")}
		{this.renderGoodbye("Hen gap lai")}
		{this.renderGoodbye("Goodbye")}
		{this.renderGoodbye("secret")}
		<Clock />
		<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  
  
  showMessage() {
	  alert('Hello');
  }
  
  renderGoodbye(message) {
	  if(message === 'secret') {
		  return (
			<Goodbye message="Warming Goodbye" />
		  );
	  }
	  return (
		<Goodbye message={message} />
	  );
  }
}

export default Hello;
