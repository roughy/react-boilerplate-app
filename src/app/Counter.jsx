import React from 'react';

/**
 * Counter component, displaying the current counter and a button for incrementation
 */
class Counter extends React.Component {

  // construct the counter
  constructor(props) {
    super(props);
    const start = typeof props.start !== 'undefined' ? parseInt(props.start) : 0;
    this.state = {count : start};
    this.onClick = this.onClick.bind(this);
  }

  /**
   * handles the button click
   * increment the current count
   */
  onClick () {
    let newCount = this.state.count + 1;
    this.setState({count: newCount});
  }

  /**
   * renders the view
   * 
   * @returns {XML}
   */
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
