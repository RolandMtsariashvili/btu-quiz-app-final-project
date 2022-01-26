import axios from "axios";
import { useEffect, useState } from "react";
import BooleanQuestion from "../../components/BooleanQuestion";
import MultiQuestion from "../../components/MultiQuestion";
import QuestionWrapper from "../../components/QuestionWrapper";
import SingleQuestion from "../../components/SingleQuestion";

const Quiz = () => {
  const [isLoading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(async () => {
    setLoading(true);
    const { data } = await axios.get("http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db");
    setQuestions(data.questions);
    setAnswers(data.answers);
  }, []);

  const onNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      {isLoading && (
        <span>Loading</span>
      )}
      {questions.length && answers.length && (
        <QuestionWrapper
          question={questions[2]}
          answer={answers[2]}
          onRightAnswer={() => console.log('right')}
          onWrongAnswer={() => console.log('wrong')}
        />
      )}

    </div>

  )
}

export default Quiz;