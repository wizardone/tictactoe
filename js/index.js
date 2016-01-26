'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
//var player = require('./player.js');
import Player from './player'

var _player = new Player('cross')

var Board = React.createClass({
  tableStyle: {
    width: 400,
    height: 400
  },
  rowStyle: {
    border: 1,
    borderStyle: 'solid'
  },
  handleClick: function(item) {
    var index = item.target.className.split('_')[1];
    console.log(index);
  },

  handleTurn: function() {
    
  },
  render: function () {
    return <table className="tictactoe" style={this.tableStyle}>
    <tbody>
    <tr>
    <td className="row_0" style={this.rowStyle} onClick={this.handleClick}></td>
    <td className="row_1" style={this.rowStyle} onClick={this.handleClick}></td>
    <td className="row_2" style={this.rowStyle} onClick={this.handleClick}></td>
    </tr>
    <tr>
    <td className="row_3" style={this.rowStyle} onClick={this.handleClick}></td>
    <td className="row_4" style={this.rowStyle} onClick={this.handleClick}></td>
    <td className="row_5" style={this.rowStyle} onClick={this.handleClick}></td>
    </tr>
    <tr>
    <td className="row_6" style={this.rowStyle} onClick={this.handleClick}></td>
    <td className="row_7" style={this.rowStyle} onClick={this.handleClick}></td>
    <td className="row_8" style={this.rowStyle} onClick={this.handleClick}></td>
    </tr>
    </tbody>
    </table>
  }
});

ReactDOM.render(
  <Board width={800} height={800}/>,
  document.getElementById('tictactoe')
);

