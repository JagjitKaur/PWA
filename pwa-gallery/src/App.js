import React, { Component } from 'react';
<<<<<<< HEAD
import Board from './Board/Board.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
=======
import Main from './Main.js';
import Header from './Header.js';
>>>>>>> e79168e27d9f7643821a5b6df84364dc6b6a9266
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {value: '',imageArray :[]};

    this.handleChange = this.handleChange.bind(this);
  }
	handleChange(event) {
		var fileList = event.target.files;
		let file = null;

		for (let i = 0; i < fileList.length; i++) {
			if (fileList[i].type.match(/^image\//)) {
			file = fileList[i];
			break;
      }
    }

    if (file !== null) {
		var existingArray = this.state.imageArray;
		existingArray.push(URL.createObjectURL(file));
		this.setState({imageArray: existingArray});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <h1 className="App-title">Enhance Me!</h1>
		  <div className="App-gallery-container">
		<input type="file" accept="image/*" capture="camera" onChange={this.handleChange}/>
		</div>
        </header>
		  <Header/>
		<div id="photos">
		{this.state.imageArray.map(function(name, index){
                    return <img src={name} alt='test' />;
                  })}
		</div>
<<<<<<< HEAD
      <Board/>  
=======
    <Main />  
>>>>>>> e79168e27d9f7643821a5b6df84364dc6b6a9266
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(App);
