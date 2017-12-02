import React, { Component } from 'react';
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
		<div id="photos">
		{this.state.imageArray.map(function(name, index){
                    return <img src={name} alt='test' />;
                  })}
		</div>
        
      </div>
    );
  }
}

export default App;
