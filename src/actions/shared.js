import  receiveQuestions  from './receiveQuestions'
import  receiveUsers  from './receiveUsers'
import { getInitialData } from "../utils/api";
// import { setAuthedUser } from './authedUser';

// const userId = 'sarahedo';

export default function handleInitialData() {
    return(dispatch) => {
        return getInitialData()
          .then(({questions, users}) => {
              dispatch(receiveQuestions(questions))
              dispatch(receiveUsers(users))
            //   dispatch(setAuthedUser(userId))
          })
    }
}