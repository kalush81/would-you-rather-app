import React, { useEffect } from "react";
import { getInitialData } from "./utils/api";

function App() {
  useEffect(() => {
    getInitialData().then(({ users, questions }) => {
      console.log("initial users: ", users);
      console.log("initial questions: ", questions);
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
