import React from "react"
import axios from "axios"
// import {Link} from 'react-router-dom'

export default class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			email: "",
			name: "",
			departmentId: "",
			departments: ["Sale", "Marketing", "Customer Service"]
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		axios
			.get("http://localhost:3005/departments")
			.then(data => {
				const departments = data.data
				this.setState({
					departments
				})
			})
			.catch(err => console.log(err))
	}

	handleChange(e) {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		const {username,password,email,name,departmentId} = this.state
		const formData = {
			username,password,email,name,departmentId
		}
		console.log(formData)
		axios
			.post("http://localhost:3005/register", formData)
			.then(data => {
				console.log(data.data)
				if(data.data.errors){
					alert(data.data._message)
				}else
				this.props.history.push('/login')
			})
			.catch(err => console.log(err))
	}

	useContainerDesign = {
		alignContent: "center",
		padding: "20vh"
	}

	useLabelDesign = {
    border: "1px solid black",
	padding : 'auto',
	marginBottom:'10px'
	}

	inputStyle={
		width:'100px',
		height:'auto',
		padding:'10px',
	marginBottom:'2vh',
// float:'right'
	}

	render() {
		return (
			<div style={this.useContainerDesign}>
				<form>
					<label style={this.useLabelDesign}>
						Username{" "}
						<input
						style={this.inputStyle}
							type='text'
							value={this.state.username}
							onChange={this.handleChange}
							name='username'
						/>
					</label>
					<br />
					<label style={this.useLabelDesign}>
						Password{" "}
						<input
						style={this.inputStyle}

							type='password'
							value={this.state.password}
							onChange={this.handleChange}
							name='password'
						/>
					</label>
					<br />
					<label style={this.useLabelDesign}>
						E-mail{" "}
						<input
						style={this.inputStyle}

							type='email'
							value={this.state.email}
							onChange={this.handleChange}
							name='email'
						/>
					</label>
					<br />
					<label style={this.useLabelDesign}>
						Full Name{" "}
						<input
						style={this.inputStyle}

							type='text'
							value={this.state.name}
							onChange={this.handleChange}
							name='name'
						/>
					</label>
					<br />
					<label style={this.useLabelDesign}>
						Department
						<select name='departmentId' onChange={this.handleChange} defaultValue={'DEFAULT'}>
						<option value="DEFAULT" disabled>Choose a Department</option>
							{this.state.departments.map((e, index) => (
								<option key={index} value={e._id}>{e.name}</option>
							))}
						</select>
					</label>
					<br />
					<button onClick={this.handleSubmit}>Submit</button>
				</form>
			</div>
		)
	}
}
