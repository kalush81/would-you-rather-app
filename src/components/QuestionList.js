import React, { useState } from "react";
import { useSelector } from "react-redux";
import Question from "./Question";

export default function QuestionList({ currentUser = null }) {
  const [num, nextIndexQuestion] = useState(0);

  const question_ids = Object.keys(
    useSelector(({ questions, setAuthedUser }) => {
      return questions;
    })
  );

  const currentUserQuestions = useSelector(({ users }) => {
    return users[currentUser] && users[currentUser].questions
  });

  console.log("currentUserQuestions", currentUserQuestions);

  //   const authedUser = useSelector(({ authedUser }) => {
  //     return authedUser;
  //   });

  const handleNextQuestion = () => {
      console.log('number of question: ',num)
    if (num == currentUserQuestions.length - 1) {
      nextIndexQuestion(0);
    } else {
      nextIndexQuestion(num + 1);
    }
  };
  return (
    <div className='wrapper'>
      <div className="text-center">
        <p>Would you rather...</p>
      </div>
      {currentUserQuestions && <Question questId={currentUserQuestions[num]} />}
      <button onClick={handleNextQuestion}>see next question</button>
    </div>
  );
}
