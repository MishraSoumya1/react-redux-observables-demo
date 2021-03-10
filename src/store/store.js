import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";
import userReducer from "../reducer/UserReducer";
import employeeReducer from "../reducer/employee-query-reducer";
import userEpic from "../epic/UserSearch";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleWare = createEpicMiddleware();
export default () => {
  const store = createStore(
    combineReducers({
      users: userReducer,
      employees: employeeReducer,
    }),
    composeWithDevTools(applyMiddleware(epicMiddleWare))
  );
  epicMiddleWare.run(userEpic);
  return store;
};
