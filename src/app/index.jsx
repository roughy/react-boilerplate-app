import React from 'react';
import {render} from 'react-dom';

import CounterComponent from './Counter.jsx';

/**
 * Application start point
 */
class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello fellow little counter...</p>
        <CounterComponent />
      </div>
    );
  }
}

// Render application components into root element
render(<App/>, document.getElementById('app'));
