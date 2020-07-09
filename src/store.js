import { createStore, compose } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
