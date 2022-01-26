import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuestionWrapper from "../../components/QuestionWrapper";
import TryAgainPopup from "../../components/TryAgainPopup";
import { QUIZ_RESPONSE_EXPIRATION_TIME } from "./constants";

const Quiz = () => {
  const navigator = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [isTryAgainPopupOpen, setTryAgainPopupOpen] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const now = new Date();
    const locallySavedData = JSON.parse(localStorage.getItem('quiz'));
    let dataToSave;
    if (locallySavedData && now.getTime() < locallySavedData.expiresAt) {
      dataToSave = locallySavedData.value;
    } else {
      const { data } = await axios.get("http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db");
      dataToSave = data;
      localStorage.setItem('quiz', JSON.stringify({
        value: data,
        expiresAt: now.getTime() + QUIZ_RESPONSE_EXPIRATION_TIME
      }))
    }
    setResponseData(dataToSave);
    setLoading(false);
  }, []);

  const onNextQuestion = (wasPreviousRight) => {
    setCurrentQuestion(currentQuestion + 1);
    if (wasPreviousRight) {
      setRightAnswers(rightAnswers + 1);
    }
  }

  const onYesTryAgainButtonClick = () => {
    const now = new Date();
    const previousAttempts = localStorage.getItem('attempts');
    const newAttempt = {
      point: rightAnswers,
      date: now.toLocaleString(),
    }
    if (previousAttempts) {
      const previousWithNew = [
        ...JSON.parse(previousAttempts),
        newAttempt,
      ]
      console.log(previousWithNew);
      localStorage.setItem('attempts', JSON.stringify(previousWithNew))
    } else {
      localStorage.setItem('attempts', JSON.stringify([newAttempt]));
    }

    navigator('/');
  }

  const onNoTryAgainButtonClick = () => {
    navigator('/');
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
        <>
          <span>{`Your score is ${rightAnswers} out of ${responseData.questions.length}`}</span>
          <button onClick={() => setTryAgainPopupOpen(true)}>
            Try Again
          </button>
          <Link to={'/history'}>History</Link>
        </>
      )}
      {isTryAgainPopupOpen && (
        <TryAgainPopup
          onYesButtonClick={onYesTryAgainButtonClick}
          onNoButtonClick={onNoTryAgainButtonClick}
        />
      )}
    </div>

  )
}

export default Quiz;