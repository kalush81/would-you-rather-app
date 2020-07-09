import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import handleInitialData from './actions/shared';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleInitialData())
  }, []);
  return <div className="App"></div>;
}

export default App;
