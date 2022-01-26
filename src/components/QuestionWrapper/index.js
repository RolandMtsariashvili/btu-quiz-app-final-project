import BooleanQuestion from "../BooleanQuestion"
import MultiQuestion from "../MultiQuestion"
import SingleQuestion from "../SingleQuestion"

const QuestionWrapper = ({
  question,
  answer,
  onRightAnswer,
  onWrongAnswer,
  onNextQuestion,
}) => {
  if (question.type === 'single') {
    return (
      <div>
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
      <div>
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
    <div>
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