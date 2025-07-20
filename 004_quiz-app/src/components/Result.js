"use client";

export default function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>
      <p className="text-xl mb-6">
        You scored {score} out of {totalQuestions}
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
}