import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
	handleChange(event) {
		alert("val"+event.target.files);
		var fileList = event.target.files;
    let file = null;

    for (let i = 0; i < fileList.length; i++) {
      if (fileList[i].type.match(/^image\//)) {
        file = fileList[i];
        break;
      }
    }

    if (file !== null) {
		this.setState({value: URL.createObjectURL(file)});
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.value} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          take a picture
        </p>
		<input type="file" accept="image/*" capture="camera" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
