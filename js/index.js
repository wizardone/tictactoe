'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

import Player from './player'

var _player1 = new Player('cross');
var _player2 = new Player('circle');

var InfoBoard = React.createClass({
  render: function () {
    return <div className="playerTurn">{this.props.player}</div>
  }
});

var Board = React.createClass({
  tableStyle: {
    width: 400,
    height: 400
  },

  imageStyle: {
    width: 120,
    height: 120
  },

  rowStyle: {
    border: 1,
    width: 130,
    height: 130,
    borderStyle: 'solid'
  },

  getInitialState: function () {
    return {
      players: [_player1, _player2],
      freeIndexes: [0,1,2,3,4,5,6,7,8],
      totalTurns: 0,
      currentTurn: 0
    }
  },

  componentDidMount: function () {
    console.log('Mounting component');
    console.log('Players: ' + this.state.players);
    console.log('First Turn: ' + this.state.firstTurn);
    console.log('Current Turn: ' + this.state.currentTurn);
  },

  handleClick: function(item) {
    var index = parseInt(item.target.className.split('_')[1]);
    if (this.state.freeIndexes.indexOf(index) >= 0) {
      this.setImage(item.target);
      this.handleTurn();
      this.updateIndexes(index);
    } else {
      console.log('No go');
    }
  },

  setImage: function(target) {
    var imageSrc = _player1.imageSrc();
    var PlayImage = React.createClass({
      render: function () {
        return <img src={imageSrc} width={120} height={120}/>
      }
    });
    ReactDOM.render(<PlayImage />, target);
  },

  handleTurn: function() {
    var turn
    if (this.state.currentTurn == 0)
      turn = 1
    else if (this.state.currentTurn == 1)
      turn = 0

    this.setState({totalTurns: this.state.totalTurns + 1,
                  currentTurn: turn});
  },

  updateIndexes: function(index) {
    this.state.freeIndexes.splice(index, 1)
    this.setState({freeIndexes: this.state.freeIndexes});
  },

  currentPlayerName: function() {
    var player;
    if (this.state.currentTurn == 0)
      player = _player1;
    else if (this.state.currentTurn == 1)
      player = _player2;

    return player._name;
  },

  render: function () {
    return (
      <div>
        <InfoBoard player={this.currentPlayerName()}/>
        <table className="tictactoe" style={this.tableStyle}>
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
      </div>
    )
  }
});

ReactDOM.render(
  <Board width={800} height={800}/>,
  document.getElementById('tictactoe')
);
