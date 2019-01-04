import React, { Component } from 'react';
import '../App.css';
import {getAlias} from './util/APIUtil';
import Game from './view/game/Game.js';
import Header from './view/Header.js'

import Grid from '@material-ui/core/Grid';

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
      let resp = response.results
      let completeResp = []
      resp.map((respon => {
        let addThis = {"answered": false}
        let addPoints = {"points": 100}
        if(respon.difficulty === "hard"){
          addPoints = {"points": 300}
        }else if (respon.difficulty === "medium") {
          addPoints = {"points": 200}
        }else {
          addPoints = {"points": 100}
        }
        Object.assign(respon, addThis)
        Object.assign(respon, addPoints)
        completeResp.push(respon)
        return completeResp
      }))
      this.setState({
        questions: completeResp
      })
    })
  }

  render() {
    let questi = this.state.questions;

    console.log(questi);

    return (
      <div>
        <Header/>
        <Grid container>
          <Grid item xs={6}>
            <Game
              questions={questi}
            />
          </Grid>
          <Grid item xs={6}>
          hei
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
