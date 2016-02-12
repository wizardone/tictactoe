'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

import Player from './player'

var _player1 = new Player('cross');
var _player2 = new Player('circle');

var InfoBoard = React.createClass({
  render: function () {
    return <div className="playerTurn"> Current turn: {this.props.player}</div>
  }
});

var GameOver = React.createClass({
  getInitialState: function(){
    return {
      gameOver: true
    }
  },

  newGame: function() {
    //So lame, that it hurts
    //window.reload();
  },

  render: function() {
    return <div>{this.props.player} won.
              <a onClick={this.newGame()}>Play again?</a>
           </div>
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
      takenIndexes: [],
      totalTurns: 0,
      currentTurn: 0,
      winningCombos: [[0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]]
    }
  },

  componentDidMount: function () {
    //console.log('Mounting component');
    //console.log('Players: ' + this.state.players);
    //console.log('First Turn: ' + this.state.firstTurn);
    //console.log('Current Turn: ' + this.state.currentTurn);
  },

  handleClick: function(item) {
    var index = parseInt(item.target.className.split('_')[1]);
    if (!isNaN(index) && this.state.takenIndexes.indexOf(index) < 0 && !this.state.gameOver == true) {
      this.setImage(item.target);
      this.handleTurn();
      this.updateTakenIndexes(index);
      this.updatePlayerIndexes(index);
    } else {
      console.log('No go');
    }
  },

  setImage: function(target) {
    var imageSrc = this.currentPlayer().imageSrc();
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

  updateTakenIndexes: function(index) {
    this.state.takenIndexes.push(index);
    this.setState({takenIndexes: this.state.takenIndexes});
  },

  updatePlayerIndexes: function(index) {
    var playerTurns = this.currentPlayer().playedTurns;
    playerTurns.push(index);
    for (var i = 0; i < this.state.winningCombos.length; i++) {
      if (playerTurns.length == this.state.winningCombos[i].length &&
         playerTurns.every(elem => this.state.winningCombos[i].includes(elem))
         ) {
         this.setState({gameOver: true});
      }
    }
  },

  currentPlayer: function() {
    var player;
    if (this.state.currentTurn == 0)
      player = _player1;
    else if (this.state.currentTurn == 1)
      player = _player2;

    return player;
  },

  startNewGame: function() {
    this.forceUpdate();
  },

  render: function () {
    return (
      <div>
      { this.state.gameOver ? <GameOver player={this.currentPlayer()._name} newGameCallback={this.startNewGame} /> : null }
      { this.state.gameOver ? null : <InfoBoard player={this.currentPlayer()._name}/> }
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

module.exports = Board
