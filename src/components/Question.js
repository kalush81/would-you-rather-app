import React from "react";
import { useSelector } from "react-redux";

export default function Question({ questId }) {
    console.log('questId? ',questId)
  const question = useSelector(({ questions, setAuthedUser }) => {
    const question = questions[questId];

    return {
      q1: question && question.optionOne.text,
      q2: question && question.optionTwo.text,
      author: question && question.author,
      setAuthedUser,
    };
  });
  const questionDiv = () => (
    <div className='question-box'>
      <div className='blue'><p>{question.q1}</p></div>
      
      <div className='red'><p>{question.q2}</p></div>
    </div>
  );
  return question ? questionDiv() : ""
}
