
import React from 'react';
import {useContext} from 'react';
import {AppContext} from '../contexts/app_context';


const EmployeeListItem = ({employee, index, parent} ) => {
  let {changeEmployee} = useContext(AppContext)

return (
  <div className='employeeItem' onClick={() => {parent !== 'employee' && changeEmployee(index)}}>
  <div className='empItemL'>
  <img src={employee.image} alt=''/>
  </div>
    <div className='empItemR'>
      <h3 className='name'>{employee.name}</h3>
      <h4 className='position'>{employee.position}</h4>
    </div>
  </div>


)
}
export default EmployeeListItem

