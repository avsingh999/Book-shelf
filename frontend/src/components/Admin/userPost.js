import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment-js';
import {Link} from 'react-router-dom';
import {getUserPost} from '../../actions'
function mapStateToProps(state) {
	return {
			user:state.user
	};
}

class userPost extends React.Component {
	componentWillMount(){
		this.props.dispatch(getUserPost(this.props.user.login.id))
	}



	render() {
		let user = this.props.user
		return (
			<div className="user_post">
				<h4>User posts </h4>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Author</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>	
					{
						user.userPost ? user.userPost.map(item => (
													<tr  key={item._id}>
														<td><Link to={`/user/edit-post/${item._id}`}> {item.name}</Link> </td>
														<td>{item.author}</td>
														<td>{moment(item.createAt).format("DD/MM/YY")}</td>
													</tr>
												))
												:
												null
												
					}
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(userPost)
