import { _getUsers, _getQuestions } from './_DATA';

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
        return {
            users,
            questions
        }
    })
}

