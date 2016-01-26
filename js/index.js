'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var Board = React.createClass({
  tableStyle: {
    width: 400,
    height: 400
  },
  rowStyle: {
    border: 1,
    borderStyle: 'solid'
  },
  render: function () {
    return <table className="tictactoe" style={this.tableStyle}>
    <tbody>
    <tr>
    <td className="row_0" style={this.rowStyle}></td>
    <td className="row_1" style={this.rowStyle}></td>
    <td className="row_2" style={this.rowStyle}></td>
    </tr>
    <tr>
    <td className="row_3" style={this.rowStyle}></td>
    <td className="row_4" style={this.rowStyle}></td>
    <td className="row_5" style={this.rowStyle}></td>
    </tr>
    <tr>
    <td className="row_6" style={this.rowStyle}></td>
    <td className="row_7" style={this.rowStyle}></td>
    <td className="row_8" style={this.rowStyle}></td>
    </tr>
    </tbody>
    </table>
  }
});

ReactDOM.render(
  <Board width={800} height={800}/>,
  document.getElementById('tictactoe')
);

