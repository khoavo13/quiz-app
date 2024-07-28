import React from "react";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";

export default function Question({
  question,
  handleAnswerOptionClick,
  goToPreviousQuestion,
  goToNextQuestion,
  currentQuestionIndex,
  totalQuestions,
  onSubmit,
  selectedAnswer,
}) {
  return (
    <Container className="mt-5">
      <div className="question-header">
        <h4>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </h4>
      </div>
      <div className="question-text">{question.text}</div>
      <ListGroup className="answer-section">
        {question.options.map((option) => (
          <ListGroupItem
            key={option}
            className="answer-option"
            active={selectedAnswer === option}
          >
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerOptionClick(option)}
            />
            <label>{option}</label>
          </ListGroupItem>
        ))}
      </ListGroup>
      <div className="navigation-buttons">
        <Button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          color="success"
        >
          Previous
        </Button>
        {currentQuestionIndex < totalQuestions - 1 ? (
          <Button onClick={goToNextQuestion} color="success">
            Next
          </Button>
        ) : (
          <Button onClick={onSubmit} color="danger">
            Submit
          </Button>
        )}
      </div>
    </Container>
  );
};