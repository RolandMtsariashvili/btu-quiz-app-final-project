import { useState } from "react"
import BooleanQuestion from "../BooleanQuestion"
import MultiQuestion from "../MultiQuestion"
import SingleQuestion from "../SingleQuestion"

const QuestionWrapper = ({
  question,
  answer,
  onNextQuestion,
}) => {
  const [answerFlag, setAnswerFlag] = useState('');

  const onRightAnswer = async () => {
    setAnswerFlag('green');
    await setTimeout(() => {
      setAnswerFlag('');
      onNextQuestion(true);
    }, 1000);
  }

  const onWrongAnswer = async () => {
    setAnswerFlag('red');
    await setTimeout(() => {
      setAnswerFlag('');
      onNextQuestion(false);
    }, 1000);
  }

  if (question.type === 'single') {
    return (
      <div style={{backgroundColor: answerFlag}}>
        <SingleQuestion
          question={question}
          answer={answer}
          onRightAnswer={onRightAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      </div>
    )
  }

  if (question.type === 'multiple') {
    return (
      <div style={{backgroundColor: answerFlag}}>
        <MultiQuestion
          question={question}
          answer={answer}
          onRightAnswer={onRightAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      </div>
    )
  }

  return (
    <div style={{backgroundColor: answerFlag}}>
      <BooleanQuestion
        question={question}
        answer={answer}
        onRightAnswer={onRightAnswer}
        onWrongAnswer={onWrongAnswer}
      />
    </div>

  )
}

export default QuestionWrapper;