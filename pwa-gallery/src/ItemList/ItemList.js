import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants/Constants.js';
import { DragSource } from 'react-dnd';
  
const itemSource = {
  beginDrag(props) {
  	console.log("prop",props);
    return {};
  }
};

function collect(connect, monitor) {
  return {
  	connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

var placeholder = document.createElement("li");
placeholder.className = "placeholder";


class ItemList extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  };
  constructor(props){
  	super(props);
  }

 
render(){
  const { connectDragSource, isDragging , id} = this.props;
    return connectDragSource(
      <li 
            style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }} className="list-group-item" data-id={this.props.id}>
     {this.props.itemContent}</li>
    );
  }
}

export default DragSource(ItemTypes.BOARD, itemSource, collect)(ItemList);
