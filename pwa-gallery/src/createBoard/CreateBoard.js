import React, { Component } from 'react';
<<<<<<< HEAD
import ItemList from '../ItemList/ItemList.js';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants/Constants.js';
import { DropTarget } from 'react-dnd';


let placeholder = document.createElement("li");
placeholder.className = "placeholder"; 



class CreateBoard extends Component {

	constructor(props) {
    super(props);
    this.state = {BoardItemName :'',boardItemList :[]};
    this.dragOver = this.dragOver.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }

  /** drag events start**/

 dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    // Firefox requires dataTransfer data to be set
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

/** remove placeholder and insert list item once drag is over **/
  dragEnd(e) {

    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);
    // Update data
    let data = this.state.boardItemList;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if(from < to) to--;
    if(this.nodePlacement == "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({boardItemList: data});
  }
  
  /** set new offset for element **/
  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    // Inside the dragOver method, check if item need to be inserted above or below target element
    let relY = e.clientY - this.over.offsetTop;
    let height = this.over.offsetHeight / 2;
    let parent = e.target.parentNode;
    
    if(relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, e.target);
    }
  }
 /** drag over end **/

 /** add tasks to daily list **/
  addItemsToList(e) {
    let itemList = this.state.boardItemList;
    if(this.state.BoardItemName==''){
      alert("Enter board name"); 
      return;
    }
    let listObj = {
      name : this.state.BoardItemName,
      completed : false
    };
    itemList.push(listObj);
    this.setState({boardItemList : itemList});
    this.setState({BoardItemName : ''});
  }
  
  /** update board name **/
=======

class CreateBoard extends Component {
	constructor(props) {
    super(props);
    this.state = {BoardItemName :'',boardItemList :[]};
  }

  addItemsToList() {
    let itemList = this.state.boardItemList;
    if(this.state.BoardItemName===''){
      alert("enter details"); 
      return;
    }
    itemList.push(this.state.BoardItemName);
    this.setState({boardItemList : itemList});
    this.setState({BoardItemName : ''});
  }

>>>>>>> e79168e27d9f7643821a5b6df84364dc6b6a9266
  handleChange(e) {
    this.setState({BoardItemName: e.target.value });
  }

<<<<<<< HEAD
  completeTask(e){
    let self = this;
    this.state.boardItemList.map((item,index)  => 
      {
        if(e.target.parentNode.parentNode.dataset.id == index)
        self.state.boardItemList[index].completed = !self.state.boardItemList[index].completed;
      });
  }

  render() {
    return (
      <div className ="panel panel-default" id={this.props.id}>
        <div className="panel-heading">{this.props.boardName.name}</div>
        <div className="panel-body">
          <input type="text" className="form-control" onChange={ this.handleChange.bind(this) }  placeholder="Add Board Item" value={this.state.BoardItemName}/>
          <ul onDragOver={this.dragOver} className="list-group checked-list-box">
            {this.state.boardItemList.map((item,index)  => <li style={{
        opacity: 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }} className="list-group-item" data-id={index}
            key={index}
            draggable="true"
            onDragEnd={this.dragEnd}
            onDragStart={this.dragStart} ><div style={{width: 10,
              height: 10}}
              ><input type="checkbox" value={item.completed} onClick= {(e) => this.completeTask(e)}/></div>{item.name}</li>)}
          </ul>
      </div>
      <div className="panel-footer">
      <button className="btn btn-primary" onClick = {(e) => this.addItemsToList(e)}>Add Items to Board</button>
=======
  render() {
    return (
      <div className ="panel panel-default">
        <div className="panel-heading">{this.props.boardName.name}</div>
        <div className="panel-body">
          <input type="text" className="form-control" onChange={ this.handleChange.bind(this) }  placeholder="Add Board Item" value={this.state.BoardItemName}/>
          <ul className="list-group">
            {this.state.boardItemList.map((item,index)  =>  <li className="list-group-item">{item}</li>)}
          </ul>
      </div>
      <div className="panel-footer">
      <button onClick = {(e) => this.addItemsToList()}>Add Items to Board</button>
>>>>>>> e79168e27d9f7643821a5b6df84364dc6b6a9266
      </div>
      </div>
    );
  }
}
<<<<<<< HEAD
export default (CreateBoard);
=======

export default CreateBoard;
>>>>>>> e79168e27d9f7643821a5b6df84364dc6b6a9266
