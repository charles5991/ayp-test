import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";

const rootReducer = combineReducers({
  employees: EmployeeReducer,
});

export default rootReducer;
