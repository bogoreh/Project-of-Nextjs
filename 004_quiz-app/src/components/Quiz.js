"use client";

import { useState } from 'react';
import Question from './Question';
import Result from './Result';

export default function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {showResult ? (
        <Result 
          score={score} 
          totalQuestions={questions.length} 
          onRestart={restartQuiz} 
        />
      ) : (
        <>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-center mb-2">Quiz App</h1>
            <p className="text-center text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>

          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-lg ${currentQuestionIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-4 py-2 rounded-lg ${!selectedOption ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}