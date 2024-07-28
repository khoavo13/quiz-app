import React from 'react';
import { Button } from 'reactstrap';

function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <h1>Welcome to the Quiz</h1>
      <Button onClick={onStart} color="primary">Start Quiz</Button>
    </div>
  );
}

export default StartPage;