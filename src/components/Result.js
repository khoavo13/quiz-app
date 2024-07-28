import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
} from "reactstrap";

export default function Result({ score, total, answers, questions }) {
  const [viewDetails, setViewDetails] = useState(false);

  const toggleViewDetails = () => {
    setViewDetails(!viewDetails);
  };

  return (
    <Container className="result-section">
      <Card className="my-2 ">
        <CardHeader className="bg-success text-white">Test Results</CardHeader>
        <CardBody>
          <CardText>
            <p>
              You scored {score} out of {total}
            </p>
          </CardText>
          <Button onClick={toggleViewDetails}>
            {viewDetails ? "Hide results" : "View results"}
            
          </Button>
          {viewDetails && (
            <div className="details-section">
              {questions.map((question, index) => (
                <div key={index} className="question-result">
                  <p>{index+1}. {question.text}</p>
                  <p className={answers[index] === question.correct ? "correct-answer" : "wrong-answer"}>
                    Your answer: {answers[index] || "No answer"}
                  </p>
                  <p className="correct-answer">Correct answer: {question.correct}</p>
                </div>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    </Container>
  );
};