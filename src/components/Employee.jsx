import React, { useContext } from 'react';
import {AppContext} from '../contexts/app_context'
import EmployeeListItem from "./EmployeeListItem";


const Employee = () => {
  
  let {filteredEmployees} = useContext(AppContext)
  return (

<div className='employeeList'>
        {filteredEmployees.map((employee, index) => {
            return (
                <EmployeeListItem employee={employee} index={index} key={index}/>
            )
        })}
      
    </div>
  )
}
      

export default Employee

