"use client";

export default function Question({ 
  question, 
  options, 
  selectedOption, 
  onOptionChange 
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => onOptionChange(option)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor={`option-${index}`}
              className="ml-3 block text-lg"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}