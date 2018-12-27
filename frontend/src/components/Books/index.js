import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getBookWReviewer, clearBookWReviewer} from '../../actions/index';

class Books extends Component {

    componentWillMount(){
        this.props.dispatch(getBookWReviewer(this.props.match.params.id))
    }
    componentWillUnmount(){
        this.props.dispatch(clearBookWReviewer())
    }
    renderBook=(books)=>(
        books.book ?
        <div className="br_container">
            <div className="br_header">
            <h2>{books.book.name}</h2>
            <h2>{books.book.author}</h2>
            <div    className="br_reviewer">
                <span>Review by:</span>{books.reviewer.name} {books.reviewer.lastname}
            </div>
            </div>
            <div className="br_review ">
                {books.book.review}
            </div>
            <div className="br_box">
                <div className="left">
                    <div>
                        <span>Pages:</span>{books.book.pages}
                    </div>
                    <div>
                        <span>Price:</span>{books.book.price}

                    </div>
                </div>
                <div className="right">
                <span>Rating:</span>
                <div>{books.book.rating}</div>
                </div>
            </div>
        </div>
        :null
    )

  render() {
    console.log(this.props)
    let books =  this.props.books;
    // console.log(books)
    return (
      <div>
          {/* sdsd */}
          {this.renderBook(books)}
      </div>
    )
  }
}
function mapStateToProps(state){
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(Books);