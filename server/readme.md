# Model

**Expense Collection**
1. Expense Name. [ Must be serachable. func serch()]
1.  Amount.
1.  [Array of Employees]  (connects to employee table)
1.  Fraction/of/share.(Who paid who shared) {function  on the front end should be created}  
1.  createdAt.
1. file. (use multer)
1. Note
1. isReimbursed
1. Expanse Category
1. isDeclined
1. isDeleted
<!-- >>> Group./Department(Already present in employeeidsarray above) -->
<!-- >>> expense icon -->


**Reimbursed**
1. Expanseid
1. createdAt

**Group /Department.**
1. Group Name.
1. Group Icon.

**Employee.**
1. Avatar 
1. Employee Name
1. Amount Credit
1. DepartmentId
1. isDeleted

**Category**

1. CategoryName
1. Icon


# Controller func()

**Expense Controller**

1. list()

      return the list of document with ```{isDeleted:false}``` 
2. create()

   return the response after creating a new document in the collection.
3. update()

   return the new record after updating the one in 'Expenses' collection  
   when tht user updates ```{isRemiburshed:true}``` create a new record in Reimburshed model


**Employee Cntroller**

1. list()

    listing all employee by populating the department.

2. create()

    create an employee , avatar , name , amount, department.

3. update()

    update can be done by admin only.  
  update amount when the an expense gets reimburshed.  
  




Write a pseudo, full stack web app which is used to split the work-related expenses among colleagues and get it approved by an admin/manager. This is a corporate application where employees can add their work-related expenses made ; like travel, food, accommodation etc. for the organisation.


[Minimum Requirement]

— Implement functionality to do the following:

1. Add an expense. Also, provide the functionality to bulk upload expenses by using  .csv files for a particular group.

2. Divide the expense among  N colleagues in equal amounts.

3. All reimbursements must be made to the concerned people.

4. Record a settlement (payment of dues) to the individual employees.

— Visually interactive and responsive design to list expenses on the front end

— The data shared  between the front end and back end must be in JSON through REST APIs

—  Implement functionality to ‘Search’ for specific expenses by name.

— Maintain sessions between relaunches. Reload all the previously added expenses from the database.

— Implement a functionality to upload the proof of expense -receipt/image etc.

— Implement an admin login functionality. Only an admin can settle accounts and approve reimbursements

— Unequal expenditure amount splits. Provide feature to split the expenses unequally based on ratio or fractions.

— Implement a O365 Auth layer or Google Auth layer to login/logout

— Visually represent the expenses in terms of how it is compared to the estimated budget amount and what portions are paid or unpaid as a dashboard

— Custom elegant design, fonts, and icons to make the web application more user-friendly.

— You may add a portfolio activity comprising the awesome work that you have done on the web application.

— Use your imagination and add features which will make things easier for the end users