import React, { useState } from "react";

const Modal = ({ employee, updateEmployee, closeModal }) => {
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({
    name: employee.name,
    email: employee.email,
    isActive: employee.isActive,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? !updatedEmployeeData.isActive : value;

    setUpdatedEmployeeData({
      ...updatedEmployeeData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateEmployee({
      ...employee,
      name: updatedEmployeeData.name,
      email: updatedEmployeeData.email,
      isActive: updatedEmployeeData.isActive,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Update Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedEmployeeData.name}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={updatedEmployeeData.email}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold flex items-center">
              Active:
              <div
                className={`ml-2 w-10 h-4 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors ${
                  updatedEmployeeData.isActive ? "bg-green-500" : ""
                }`}
                onClick={() =>
                  handleChange({
                    target: { name: "isActive", type: "checkbox" },
                  })
                }
              >
                <div
                  className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${
                    updatedEmployeeData.isActive ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-400 hover:bg-gray-600 text-white font-normal px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
