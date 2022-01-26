import axios from "axios";
import { useEffect, useState } from "react";
import QuestionWrapper from "../../components/QuestionWrapper";

const Quiz = () => {
  const [isLoading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);

  useEffect(async () => {
    setLoading(true);
    const { data } = await axios.get("http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db");
    setResponseData(data);
    setLoading(false);
  }, []);

  const onNextQuestion = (wasPreviousRight) => {
    setCurrentQuestion(currentQuestion + 1);
    if (wasPreviousRight) {
      setRightAnswers(rightAnswers + 1);
    }
  }

  return (
    <div>
      {isLoading && (
        <span>Loading</span>
      )}
      {responseData && responseData.questions.length > currentQuestion && (
        <>
          <QuestionWrapper
            question={responseData.questions[currentQuestion]}
            answer={responseData.answers[currentQuestion]}
            onNextQuestion={onNextQuestion}
          />
          <span>{`${currentQuestion + 1}/${responseData.questions.length}`}</span>
        </>
      )}
      {responseData && currentQuestion >= responseData.questions.length && (
        <span>{`Your score is ${rightAnswers} out of ${responseData.questions.length}`}</span>
      )}
    </div>

  )
}

export default Quiz;