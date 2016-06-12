import React from 'react';
import {render} from 'react-dom';

import CounterComponent from './Counter.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello fellow little counter...</p>
        <CounterComponent start="43" />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
