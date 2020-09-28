import React from 'react';
import QuestionsList from "./QuestionList";

export default function Home(props) {
    const authedUser = props.location.state && props.location.state.authedUser
    console.log(authedUser)

    return (
        <div>
            { authedUser && <QuestionsList currentUser={authedUser}/> }
        </div>
    )
}
