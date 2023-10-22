import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import Modal from "./Modal";
import { updateEmployee as updateEmployeeAction } from "../context/actions/employeeAction";

const EmployeeTable = () => {
  const employees = useSelector((state) => state.employees.employees.employees);
  console.log(" employeestest", employees);

  const dispatch = useDispatch();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const openModal = (employee) => {
    setSelectedEmployee(employee);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
  };

  const updateEmployee = (updatedEmployee) => {
    dispatch(updateEmployeeAction(updatedEmployee));
    closeModal();
  };

  return (
    <div className="p-4">
      <Table
        variant="simple"
        className="min-w-full bg-white rounded-lg overflow-hidden"
      >
        <Thead className="bg-gray-100">
          <Tr>
            <Th className="py-2 px-4">Name</Th>
            <Th className="py-2 px-4">Email</Th>
            <Th className="py-2 px-4">Active</Th>
            <Th className="py-2 px-4">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.isArray(employees) && employees.length > 0 ? (
            employees.map((employee) => (
              <Tr key={employee.id}>
                <Td className="py-2 px-4">{employee.name}</Td>
                <Td className="py-2 px-4">{employee.email}</Td>
                <Td className="py-2 px-4">
                  {employee.isActive ? "Yes" : "No"}
                </Td>
                <Td className="py-2 px-4">
                  {employee.isActive ? (
                    <Button
                      colorScheme="blue"
                      size="sm"
                      className="text-white font-normal text-[12px] bg-gradient-to-r p-2 rounded from-green-500 to-blue-500"
                      onClick={() => openModal(employee)}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      colorScheme="red"
                      size="sm"
                      className="text-gray-500 font-normal text-[12px] bg-gradient-to-r p-2 rounded  from-red-500 to-pink-500 cursor-not-allowed	"
                    >
                      Updated
                    </Button>
                  )}
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan="4" className="text-center py-4">
                No employees available
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>

      {selectedEmployee && (
        <Modal
          employee={selectedEmployee}
          updateEmployee={updateEmployee}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
