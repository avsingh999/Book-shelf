import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addBook,clearNewBook} from '../../actions/index';



class add extends React.Component {
	state = {
		formdata : {
		    name:'',
		    author:'',
		    review: '',
		    pages: '',
		    rating: '',
		    price: ''
  		}
	}
	handleInput = (event, name) => {
		const newFormdata = {
			...this.state.formdata
		}
		newFormdata[name] = event.target.value
		this.setState({
			formdata:newFormdata
		})
	}
	// showNewBook = (book) => {
		// book.post ?
		// <div className="conf_link"> 
		// 	Cool !! <Link to={`/books/${book.bookId}`}> Click to see book</Link>
		// </div>
	// 	:
	// 	null

	// }
	componentWillUnmount(){
		this.props.dispatch(clearNewBook())
	}
	submitForm = (e) => {
		e.preventDefault();
		this.props.dispatch(addBook({
			...this.state.formdata,
			ownerId:this.props.user.login.id
		}))
	}

	render() {
		console.log(this.props)

		return (
			<div className='rl_container article'>
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
						<button type="submit">Submit</button>
						{  this.props.books.newbook ?
							(this.props.books.newbook.post ?
															<div className="conf_link"> 
																Cool !! <Link to={`/books/${this.props.books.newbook.bookId}`}> Click to see book</Link>
															</div>
														:
															null)
															:null
						}
				</form>
			</div>
		);
	}
}

function mapStateToProps(state){
	console.log(state)
	return{
		books:state.books
	}
}

export default connect(mapStateToProps)(add); 