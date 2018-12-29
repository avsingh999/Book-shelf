import React from 'react';
import axios from 'axios';

const logout = (props) => {
	let request = axios.get(`http://localhost:5001/api/logout`,{withCredentials: true})
	              .then(response => {
	              		setTimeout(()=>{
	              			props.history.push('/')
	              		},2000)

	              })
  return (
    <div className="logout_container"> 
        <h1>
            Sorry to see you go
        </h1>
    </div>
  )
}

export default logout;