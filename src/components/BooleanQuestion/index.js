import { useState } from "react"

const BooleanQuestion = ({
  question,
  answer,
  onRightAnswer,
  onWrongAnswer,
}) => {
  const [usersAnswer, setUsersAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    usersAnswer === String(answer.answer) ? onRightAnswer() : onWrongAnswer();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{question.question}</h3>
      <label>
        <span>False</span>
        <input
          type="radio"
          name="answer"
          value="false"
          onChange={(e) => setUsersAnswer(e.target.value)}
        />
      </label>
      <label>
        <span>True</span>
        <input
          type="radio"
          name="answer"
          value="true"
          onChange={(e) => setUsersAnswer(e.target.value)}
        />
      </label>
      <button type="submit">Next</button>
    </form>
  )
}

export default BooleanQuestion;