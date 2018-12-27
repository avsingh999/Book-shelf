import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/index'

class login extends Component {
    state = {
        email:'',
        password:'',
        error:'',
        success:false
    }
    handleInutEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleInutPassword = (event) => {
        this.setState({password:event.target.value})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.isAuth){
            this.props.history.push('/user')
        }
    }

    sumbitForm = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.dispatch(loginUser(this.state))
    }
  render() {
    let user = this.props.user
    return (
      <div>
          <div className="rl_container">
                <form onSubmit={this.sumbitForm}>
                    <h2>login</h2>
                    <div className="form_element">
                        <input type="email" placeholder="email" value={this.state.email} onChange={this.handleInutEmail}></input>
                    </div>
                    <div className="form_element">
                        <input type="password" placeholder="password"  value={this.state.password} onChange={this.handleInutPassword}></input>
                    </div>
                    <button type="submit">Login</button>
                    <div className="error">
                    {
                        user.login ?
                            <div>
                                {user.login.message}
                            </div>
                        :
                        null
                    }
                    </div>

                </form>
          </div>
      </div>
    )
  }
}
function  mapStateToProps (state){
    // console.log(state)
    return {
        user: state.user
    }
}

export  default connect(mapStateToProps)(login)