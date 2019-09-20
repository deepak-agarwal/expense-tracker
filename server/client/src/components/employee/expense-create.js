import React from "react";
import { Formik, Field, FieldArray } from "formik";
import axios from "axios";
import Select from "react-select";

const ExpenseCreate = () => (
  <div>
    <h1>Add Expense</h1>
    <Formik
      initialValues={{
        name: "",
        amount: "",
        employeeIds: [],
        note: "",
        expanseCategory: "",
        options: [
          { value: "foo", label: "Foo" },
          { value: "bar", label: "Bar" }
        ],
        category:[1,2,3]
      }}
      validate={values => {
        let errors = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (!/^[a-z]*[A-Z]*$/i.test(values.name)) {
          errors.name = "Only Alphabets are allowed";
        }
        if (!values.amount) {
          errors.amount = "Required";
        } else if (!/^[0-9]*$/i.test(values.amount)) {
          errors.amount = "Only Numbers are allowed";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const payload = {
          ...values,
          employeeIds: values.employeeIds.map(t => t.value)
        };

        axios
          .post("http://localhost:3005/addExpenses", payload, {
            headers: {
              "x-auth":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDdhODM2ODk4NzQwNTBlZTljYWNmOGUiLCJjcmVhdGVkQXQiOjE1NjgzNTA0NzQ4MjksImlhdCI6MTU2ODM1MDQ3NH0.omJ-kUpwSuFBoOi5rjALZr5s2qOT-7pSwaMCVOJNEsc"
            }
          })
          .then(expense => {
            setSubmitting(false);
            console.log(payload)
          })
          .catch(err => {
            setSubmitting(false);
            console.log(err);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field type='text' name='name' placeholder='Expanse Name' />
          {errors.name && touched.name && errors.name}
          <br />
          <Field type='text' name='amount' placeholder='Amount' />
          {errors.amount && touched.amount && errors.amount}
          <br />
          <Field component="textarea" name='note' />
     
       <FieldArray  name='expanseCategory' render={() => (
            <Field component='select' name='expanseCategory'>
              {values.category.map(e => <option>{e}</option>)}
              </Field>
          )}/>
          
          <Field
            name='employeeIds'
            component={EmployeePicker}
            options={values.options}
            onChange={setFieldValue}
            value={values.employeeIds}
          />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

const EmployeePicker = ({
  field,
  options,
  value,
  onChange,
  handleChange = value => {
    onChange("employeeIds", value);
  }
}) => {
  return (
    <Select
      closeMenuOnSelect={false}
      name={field.name}
      options={options}
      value={value}
      onChange={handleChange}
      isMulti
    />
  );
};

export default ExpenseCreate;
