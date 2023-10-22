export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const updateEmployee = (updatedEmployee) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: updatedEmployee,
  };
};
