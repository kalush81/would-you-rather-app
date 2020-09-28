import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleInitialData from "../actions/shared";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./Home";

function App() {
  const [user, setStateUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const authedUser = useSelector(({ setAuthedUser }) => {
    return setAuthedUser;
  });

  console.log("authedUser App component: ", authedUser);

  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <QuestionsList /> */}
        <Route path="/">
          {authedUser ? (
            <Redirect
              to={{
                pathname: "/home",
                state: { authedUser }
              }}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>

        <Route path="/home" component={Home} />
        {/* <Route path="/user/:userId" exact component={Home} /> */}
      </div>
    </Router>
  );
}

export default App;
