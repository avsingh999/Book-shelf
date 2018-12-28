import React from 'react';
import { connect } from 'react-redux';
import {getBook,updateBook, clearBook, deleteBook} from '../../actions'
import {Link} from 'react-router-dom';

function mapStateToProps(state) {
	return {
			books:state.books
	};
}

class edit extends React.PureComponent {
	state  = {
		formdata:{
			_id:this.props.match.params.id,
			name:'',
			author:'',
			review:'',
			pages:'',
			rating:'',
			price:''
		}
	};


		handleInput = (event, name) => {
		const newFormdata = {
			...this.state.formdata
		}
		newFormdata[name] = event.target.value
		this.setState({
			formdata:newFormdata
		})
	}

	componentWillMount(){
		this.props.dispatch(getBook(this.props.match.params.id))
	}
	componentWillUnmount(){
		this.props.dispatch(clearBook())
	}
	componentWillReceiveProps(nextParams){
		let book  = nextParams.books.book;
		// console.log(book.)
		this.setState({
			formdata:{
				_id:book._id,
				name:book.name,
				author:book.author,
				review:book.review,
				pages:book.pages,
				rating:book.rating,
				price:book.price
			}
		})
	}

	submitForm = (e) => {
		e.preventDefault();
			this.props.dispatch(updateBook(this.state.formdata))
	}

	deletePost = () => {
		this.props.dispatch(deleteBook(this.props.match.params.id))	
	}

	redirectUser = () =>{
		setTimeout(()=>{
			this.props.history.push('/')
		}, 1000)
	}
	render() {
		console.log(this.props)
		let books = this.props.books
		return (
			<div className='rl_container article'>
				{
					books.updateBook ? 
					<div className="edit_confirm">
						post Updates, <Link to=	{`/books/${books.book._id}`}>
											see post </Link>
					</div>
					: null
				}
				{
					books.postDeleted ? 
					<div className="red_tag">
						post delete
						{this.redirectUser()}
					</div>
					: null
				}

				<form onSubmit={this.submitForm}>
					<h3> ADD review</h3>
						<div className="form_element">
							<input
								type='text'
								placeholder="enter name"
								value={this.state.formdata.name}
								onChange={(event)=>this.handleInput(event,'name')}
							/>
						</div>
						<div className="form_element">
							<input
								type='text'
								placeholder="enter author"
								value={this.state.formdata.author}
								onChange={(event)=>this.handleInput(event,'author')}

							/>
						</div>
						
						<div className="form_element">
							<input
								type='text'
								placeholder="enter review"
								value={this.state.formdata.review}
								onChange={(event)=>this.handleInput(event,'review')}

							/>
						</div>
		
				
						<div className="form_element">
							<input
								type='number'
								placeholder="enter page"
								value={this.state.formdata.pages}
								onChange={(event)=>this.handleInput(event,'pages')}

							/>
						</div>
										<div className="form_element">
							<select value={this.state.formdata.rating }
								onChange={(event)=>this.handleInput(event,'rating')}
							>

								<option val="1">1</option>
								<option val="2">2</option>
								<option val="3">3</option>
								<option val="4">4</option>
								<option val="5">5</option>
							</select>
							
						</div>
									<div className="form_element">
							<input
								type='number'
								placeholder="enter price"
								value={this.state.formdata.price}
								onChange={(event)=>this.handleInput(event,'price')}

							/>
						</div>
						<button type="submit">Edit post</button>
						<div className="delete_post">
							<div className="button" onClick={this.deletePost}>
								delete
							</div>
						</div>
				</form>
			</div>
		)
	}
}


export default connect(
	mapStateToProps)(edit)
