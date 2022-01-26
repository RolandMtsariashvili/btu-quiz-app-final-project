import { useState } from "react";

const MultiQuestion = ({
  question,
  answer,
  onRightAnswer,
  onWrongAnswer,
}) => {
  const initialSelection = {
    1: false,
    2: false,
    3: false,
    4: false,
  };

  const [selectedAnswers, setSelectedAnswers] = useState(
    initialSelection
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedAnswersArray = [];
    for (const answer of Object.keys(selectedAnswers)) {
      if (selectedAnswers[answer]) {
        selectedAnswersArray.push(answer);
      }
    }

    if (answer.answer.length !== selectedAnswersArray.length) {
      onWrongAnswer();
      return;
    }

    const sortedCorrectAnswers = answer.answer.sort();
    const sortedUsersAnswers = selectedAnswersArray.sort();

    for (let i = 0; i < sortedCorrectAnswers.length; i += 1) {
      if (sortedCorrectAnswers[i] != sortedUsersAnswers[i]) {
        console.log(sortedCorrectAnswers, sortedUsersAnswers);
        onWrongAnswer();
        return;
      }
    }
    
    onRightAnswer();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>{question.question}</h3> 
      {question.options.map((option, index) => (
        <label key={option}>
          <span>{option}</span>
          <input
            type="checkbox"
            checked={selectedAnswers[index + 1]}
            onChange={(e) => setSelectedAnswers({
              ...selectedAnswers,
              [index + 1]: e.target.checked,
            })}
          />
        </label>
      ))}
      <button type="submit">Next</button>
    </form>
  )
}

export default MultiQuestion;