
import React, { useState, createContext, useEffect } from "react";
import employees from '../models/employees';

export const AppContext = createContext();

const AppContextProvider = (props) => {

const [currentEmployee, setCurrentEmployee] = useState(employees[0]); 
const [showEmployee, setShowEmployee] = useState(false);
const [buttonCount, setButtonCount] = useState(0);
const [searchEmployee, setSearchEmployee] = useState('');
const [filteredEmployees, setFilteredEmployees] = useState(employees);

const changeEmployee = (index) => {
    setCurrentEmployee(filteredEmployees[index]);
    setShowEmployee(true);
};

const toggleEmployeePage = () => {
    setButtonCount((prev) => prev + 1);
    setShowEmployee((prev) => !prev);
};

useEffect(() => {
    console.log(showEmployee);
  }, [buttonCount]);

const handleInput = (e) => {
    const name = e.target.value.toLowerCase();
    setSearchEmployee(name);
    console.log(`Searched employee: ${searchEmployee}`);
    console.log('Handling input...');
    filterAllEmployees(name);
  };

const filterAllEmployees = (name) => {
    const filtered = employees.filter((employee) => employee.name.toLowerCase().includes(name));
    setFilteredEmployees(filtered);
    console.log(`Filtered Employees: ${filtered.length}`);
    console.log(filtered);
};

useEffect(() => {
    console.log(`USE EFFECT FILTERED EMPLOYEES`, filteredEmployees);
}, [filteredEmployees]);

return (
    <AppContext.Provider value={{

    employees, currentEmployee, setCurrentEmployee, changeEmployee,
    showEmployee,setShowEmployee,toggleEmployeePage,
    searchEmployee, setSearchEmployee, handleInput,
    filteredEmployees, filterAllEmployees,
    
    }}>
    {props.children}

    </AppContext.Provider>
  );
};

export default AppContextProvider;
