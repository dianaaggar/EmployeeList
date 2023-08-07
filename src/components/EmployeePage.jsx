
import React, { useContext } from 'react';
import {AppContext} from '../contexts/app_context';
import Header from './Header';
import EmployeeListItem from './EmployeeListItem';



const EmployeePage = () => {
    const { currentEmployee } = useContext(AppContext);
    console.log('current employee is:', currentEmployee.name);

    return (
    <div className='employeePage'>
        <Header page="employee" />
        <div className='employeeInfo'>
        <EmployeeListItem employee={currentEmployee} parent="employee" />
        {Object.entries(currentEmployee.contact).map(([method, number]) => (
            <div className='contactInfo'>
            <div className='left'>
                <h4>{method}</h4>
                <p className='contactNumber'>{number}</p>
            </div>
            <div className='right'>
                <p className='infos'></p>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

export default EmployeePage;




