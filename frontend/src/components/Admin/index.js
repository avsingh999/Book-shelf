import React from 'react';

const User = (props) => {
  let user= props.user.login;
  return (
    <div className="user_container">
      <div className="avtar">
            <img alt="avtar " src=""></img>
      </div>
      <div>
      <div><span>Name:</span>{user.name}{user.lastname}</div>
      <div><span>email:</span>{user.email}</div>
      </div>
    </div>
  )
}

export default User
