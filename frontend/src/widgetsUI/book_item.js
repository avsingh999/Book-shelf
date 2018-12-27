import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Book_item extends Component {
  render() {
    return (
      <div>
        <hr/>
        <Link to={`/books/${this.props['_id']}`} className="book_item">
          <div className="book_header">
              <h2>{this.props['name']}</h2>
          </div>    
          <div className="book_buuble">
            <strong>price</strong> ${this.props['price']}
          </div>

          <div className="book_bubble">
          <strong>Pages</strong> $ {this.props['pages']}
          </div>
          <div className="book_bubble">
            <strong>Rating</strong> ${this.props['rating']}
          </div>
        </Link>  
      </div>

    )
  }
}
export default Book_item;