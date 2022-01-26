import { useState } from "react/cjs/react.development"

const SingleQuestion = ({
  question,
  answer,
  onRightAnswer,
  onWrongAnswer,
  onNextQuestion
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    answer.answer === +selectedAnswer ? onRightAnswer() : onWrongAnswer();
    onNextQuestion();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <label key={index + 1}>
          <span>{option}</span>
          <input
            type="radio"
            name="answer"
            value={index + 1}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
        </label>
      ))}
      <button type="submit">Next</button>
    </form>
  )
}

export default SingleQuestion;