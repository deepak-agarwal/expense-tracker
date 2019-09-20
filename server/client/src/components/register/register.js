import React from "react";
import axios from 'axios';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      name:"",
      departmentId:"",
      departments:[]
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    //get department data
    axios.get('http://localhost:3005/register')

  }

    handleChange (e){
        const {value,name} = e.target
        this.setState({
            [name] : value 
        })
  }

  handleSubmit(e){
      e.preventDefault()
        axios.post('http://localhost:3005/departments',this.state)
        .then(data => console.log(data.data))
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Username{" "}
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />
          </label><br/>
          <label>
            Password{" "}
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
              name = "password"
            />
          </label><br/>
          <label>
            E-mail{" "}
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleChange}
              name = "email"
            />
          </label><br/>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
