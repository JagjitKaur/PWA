import React, { Component } from 'react';

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

  handleChange(e) {
    this.setState({BoardItemName: e.target.value });
  }

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
      </div>
      </div>
    );
  }
}

export default CreateBoard;
