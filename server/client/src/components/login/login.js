import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-material-ui"
import { Link,withRouter } from "react-router-dom"
import axios from 'axios'

function Login(props) {
	const {history} = props
	console.log(history)
	return <LoginContainer history={history}/>
}

const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white
			// textColor:theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}))

function LoginContainer(props) {
	const classes = useStyles()
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography variant='h5'>Expense Tracker</Typography>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography variant='h6'>Sign In</Typography>
				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					onSubmit={values => {
						axios.post ('http://localhost:3005/login',values)
						.then(data => {
							//set token to local storage and call /user
							props.history.push('/account')
						})
						.catch(err => console.log(err))
					}}
				>
					{({ email, password }) => (
						<Form className={classes.form}>
							<Field
								variant='outlined'
								margin='normal'
								required
								fullWidth
								// id="email"
								type='email'
								label='Email Address'
								name='email'
								autoFocus
								component={TextField}
								value={email}
							/>
							<Field
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								value={password}
								component={TextField}
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
							>
								Sign In
							</Button>
						</Form>
					)}
				</Formik>
				<Grid container>
					<Grid item xs={3}></Grid>
					<Grid item>
						<Link to='/register'>{"Don't have an account? Sign Up"}</Link>
					</Grid>
				</Grid>
			</div>
		</Container>
	)
}

export default withRouter(Login)