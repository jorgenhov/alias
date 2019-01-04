import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ListQuest from './questions/ListQuest.js';
import './Game.css';

//component for holding the different questions on the game view
class Game extends Component {
  render() {
    const questi = this.props.questions
    return (
      <Grid container>
      {questi.map((quest => {
        return(
            <ListQuest
              question={quest}
            />
        )
      }))}
      </Grid>
    );
  }
}

export default Game;
