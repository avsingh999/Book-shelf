import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './sideNav/sideNav';
import { Icon } from 'antd';


class Header extends Component {

  state={
    showNav:true
  }

  onHideNav = () => {
    this.setState({
      showNav:false
    })
  }
  render() {
    return (
      <header>
        <div className="open_nav">

          <Icon type="bars" 
            style={{ fontSize: '60px', color: '#08c' }} theme="outlined" 
            onClick={()=> this.setState({showNav:true})}
            
          />
            <Nav
              showNav={this.state.showNav}
              onHideNav = {()=>this.onHideNav()}
            
            />

          <Link to="/"  className="logo">
              Books      
          </Link>
        </div>
      </header>
    )
  }
}


export default Header;