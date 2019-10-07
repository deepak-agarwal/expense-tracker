// retrive employee detail here from employee id , and create dashboard fro employee

import React from 'react';
import ExpenseCreate from './expense-create';
import ExpenseList from './expesnse-list';


function EmployeeDashBoard() {
  return (
    <React.Fragment >
{/* this both will be shown here along with charts */}
        <div><ExpenseCreate/></div>
        <div><ExpenseList/></div>

    </React.Fragment>
  );
}

export default EmployeeDashBoard;