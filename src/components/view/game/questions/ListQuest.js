import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ListQuest.css';

class ListQuest extends Component {
  render() {
    const question = this.props.question
    return (
      <div className="btn-wrap">
      <Button className="btn-allias" variant="contained" size="large" color="primary">
        {question.points}
      </Button>
      </div>
    );
  }
}

export default ListQuest;
