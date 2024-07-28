import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";
import Result from "./Result";
import StartPage from "./StartPage";

const questions = [
  {
    id: 1,
    text: "Who invented OOP?",
    options: ["Andrea Ferro", "Adele Goldberg", "Alan Kay", "Dennis Ritchie"],
    correct: "Alan Kay",
  },
  {
    id: 2,
    text: "Which is not a feature of OOP in general definitions?",
    options: [
      "Efficient Code",
      "Code reusability",
      "Modularity",
      "Duplicate/Redundant data",
    ],
    correct: "Duplicate/Redundant data",
  },
  {
    id: 3,
    text: "Which was the first purely object oriented programming language developed?",
    options: ["Kotlin", "SmallTalk", "Java", "C++"],
    correct: "SmallTalk",
  },
  {
    id: 4,
    text: "Which feature of OOP indicates code reusability?",
    options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"],
    correct: "Inheritance",
  },
  {
    id: 5,
    text: "Which among the following doesn’t come under OOP concept?",
    options: [
      "Data hiding",
      "Message passing",
      "Platform independent",
      "Data binding",
    ],
    correct: "Platform independent",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (selectedOption) => {
    setAnswers({ ...answers, [currentQuestion]: selectedOption });
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <div className="App">
      {quizStarted ? (
        showResult ? (
          <Result
            score={score}
            total={questions.length}
            answers={answers}
            questions={questions}
          />
        ) : (
          <>
            <Timer duration={300} onTimeUp={handleSubmit} />
            <Question
              question={questions[currentQuestion]}
              handleAnswerOptionClick={handleAnswerOptionClick}
              goToPreviousQuestion={goToPreviousQuestion}
              goToNextQuestion={goToNextQuestion}
              currentQuestionIndex={currentQuestion}
              totalQuestions={questions.length}
              onSubmit={handleSubmit}
              selectedAnswer={answers[currentQuestion]}
            />
          </>
        )
      ) : (
        <StartPage onStart={startQuiz} />
      )}
    </div>
  );
}