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
  




