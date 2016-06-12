import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    const start = typeof props.start !== 'undefined' ? parseInt(props.start) : 0;
    this.state = {count : start};
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    let newCount = this.state.count + 1;
    this.setState({count: newCount});
  }

  render() {
    return (
      <div>
        Count : <span>{this.state.count}</span>
        <div><button onClick={this.onClick}>Count one more</button></div>
      </div>
    );
  }

}

export default Counter;
