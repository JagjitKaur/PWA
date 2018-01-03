import React, { Component } from 'react';
import CreateBoard from '../createBoard/CreateBoard.js';
import './Board.css';

class Board extends Component {

	constructor(props) {
    super(props);
    this.state = {isOpenPanel: true,boards:[],name:''};
    this.openCreationPanel = this.openCreationPanel.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

	openCreationPanel(id,event) {
    let newVal = this.state.isOpenPanel;
    this.setState({isOpenPanel : !newVal});
  }

  //inout field edit
  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  // call this when create button for board is pressed
  createBoard(){
    this.openCreationPanel();
    let existingBoardArray = this.state.boards;
    if(this.state.name===''){
      alert("enter board Name"); 
      return;
    }
    let boardObj = {
      name:this.state.name,
      items:[]
    };
    existingBoardArray.push(boardObj);
    this.setState({boards :  existingBoardArray});
  }
  render() {
    return (
      <div className="container Board"> 
      { this.state.isOpenPanel?
      (<button className="panel panel-default" onClick= {this.openCreationPanel}>
        <div className="panel-body">
          Create a Board
          </div>
      </button>):
      (<div className="panel panel-default">
        <div className="panel-heading">Creating Board</div>
        <div className="panel-body">
          <div className="form-group">
          <input type="text" className="form-control" onChange={ this.handleChange.bind(this) }  placeholder="Board Name" value={this.state.name}/>
        </div></div>
        <div className="panel-footer">
          <button onClick={(e) => this.openCreationPanel(0, e)} >Cancel</button>
          <button onClick={(e) => this.createBoard(1, e)}  >Create</button>
          </div>
      </div>)}
      <div className="row ">
        {this.state.boards.map((item,i) => <div className="col-xs-4 col-md-4 "><CreateBoard  boardName={item}/></div>)}
      </div>
      </div>
      );
  }
}
export default Board;
