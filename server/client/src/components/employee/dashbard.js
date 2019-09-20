// retrive employee detail here from employee id , and create dashboard fro employee

import React from 'react';
import ExpenseCreate from './expense-create';
import EmployeeList from './expesnse-list';


function EmployeeDashBoard() {
  return (
    <React.Fragment >
{/* this both will be shown here along with charts */}
        <div><ExpenseCreate/></div>
        <div><EmployeeList/></div>

    </React.Fragment>
  );
}

export default EmployeeDashBoard;