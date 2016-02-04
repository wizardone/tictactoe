'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

import Board from './board'

ReactDOM.render(
  <Board width={800} height={800}/>,
  document.getElementById('tictactoe')
);
