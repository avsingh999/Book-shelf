import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBooks } from '../actions'
import BookItem from '../widgetsUI/book_item.js'

class Home_container extends Component {

  componentWillMount(){
      this.props.dispatch(getBooks(2,0,'asc'))
  }

  renderItem = (books) => (
    books ? (books.list ?
     books.list.map((item,i) => (
        <BookItem key={i} {...item}/>
      )) : null)
    :
    null
  )

  loadmore = () => {
    this.props.dispatch(getBooks(1,this.props.books.list.length,'asc',this.props.books.list))
  }
  render() {
    return (
      <div>
        {this.renderItem(this.props.books)}
        <div
          className="loadmore"
          onClick={this.loadmore}
        >
        Load more
        </div>
      </div>
    )
  }
}

function  mapStateToProps  (state) {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(Home_container);