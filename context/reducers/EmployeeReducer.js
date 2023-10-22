import { combineReducers } from "redux";
import { UPDATE_EMPLOYEE } from "../actions/employeeAction";

const initialState = {
  employees: [
    {
      id: 1,
      name: "John Smith",
      email: "john@ayp-group.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@ayp-group.com",
      isActive: false,
    },
    {
      id: 3,
      name: "Tom Smith",
      email: "tom@ayp-group.com",
      isActive: true,
    },
  ],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      const updatedEmployeeIndex = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      );

      const updatedEmployees = [...state.employees];
      updatedEmployees[updatedEmployeeIndex] = action.payload;

      return {
        ...state,
        employees: updatedEmployees,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  employees: employeesReducer,
});

export default rootReducer;
