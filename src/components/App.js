import React, { Component } from 'react';
import '../App.css';
import {getAlias} from './util/APIUtil';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      players: [],
      category: 0,
      difficulity: 0
    }
  }

  componentDidMount() {
    this.getAlias();
  }

  getAlias() {
    getAlias()
    .then(response => {
      this.setState({
        questions: response.results
      })
      console.log(response.results);
    })
  }

  render() {
    let numb = this.state.questions.length;
    return (
      <div>{numb}</div>
    );
  }
}

export default App;
