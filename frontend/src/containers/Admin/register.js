import React from 'react';
import { connect } from 'react-redux';
import {getUsers, userRegister} from '../../actions';

function mapStateToProps(state) {
	return {
		user:state.user
	};
}

export class register extends React.PureComponent {
	state = {
			name:'',
			lastname:'',
			email:'',
			password:'',
			error:''
	}

	componentWillMount(){
		this.props.dispatch(getUsers())
	}
	handleInputEmail = (event) => {
		this.setState({
			email:event.target.value
		})
	} 
	handleInputPassword = (event) => {
		this.setState({
			password:event.target.value
		})
		
	} 
	handleInputName = (event) => {
		this.setState({
			name:event.target.value
		})
		
	} 
	handleInputLastName = (event) => {
		this.setState({
			lastname:event.target.value
		})
		
	} 

	componentWillReceiveProps(nextProps){
		if(nextProps.user.register===false){
			this.setState({
				error:'Error, try,again'
			})
		}
		else{
			this.setState({
				name:'',
				lastname:'',
				email:'',
				password:''
			})
		}
	}

	submitForm =(e) =>{
		e.preventDefault();
		this.setState({error:''})
		this.props.dispatch(userRegister(
			{email:this.state.email,
			password:this.state.password,
			name:this.state.name,
			lastname:this.state.lastname
			}, this.props.user.user
			))
	}
	showUser = (user) => {
		console.log(user)
		return user.user ? 
		user.user.map(item => (
			<tr key={item._id}>
				<td>{item.name}</td>
				<td>{item.lastname}</td>
				<td>{item.email}</td>

			</tr>
		))
		:
		null
	}

	render() {
		console.log(this.props)
		let user = this.props.user;
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<h4>Add User</h4>
					<div className="form_element">
						<input
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={this.handleInputName}
						/>
					</div>

					<div className="form_element">
						<input
							type="text"
							placeholder="Last Name"
							value={this.state.lastname}
							onChange={this.handleInputLastName}
						/>
					</div>

					<div className="form_element">
						<input
							type="email"
							placeholder="email"
							value={this.state.email}
							onChange={this.handleInputEmail}
						/>
					</div>
					<div className="form_element">
						<input
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleInputPassword}
						/>
					</div>
					<button type="submit">Register</button>
					<div className="error">
						{this.state.error}
					</div>
				</form>
				<div className="current_users">
					<table>	
						<thead>
							<tr>
								<th>Name</th>
								<th>lastName</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{this.showUser(user)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(register)
