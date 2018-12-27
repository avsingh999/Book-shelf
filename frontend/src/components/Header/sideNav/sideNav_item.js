import React from 'react';
import {Link} from 'react-router-dom';
import { Icon } from 'antd';


const SideItems = (props) => {

    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        }
        ,
        {
            type:'navItem',
            icon:'user',
            text:'My profile',
            link:'/user',
            restricted:false
        },
        {
            type:'navItem',
            icon:'home',
            text:'addd admin',
            link:'/user/register',
            restricted:false
        },
        {
            type:'navItem',
            icon:'home',
            text:'Login',
            link:'/login',
            restricted:false
        },
        {
            type:'navItem',
            icon:'home',
            text:'My review',
            link:'/user/user-reviews',
            restricted:false
        },
        {
            type:'navItem',
            icon:'star',
            text:'add review',
            link:'/user/add',
            restricted:false
        },
        {
            type:'navItem',
            icon:'logout',
            text:'logout',
            link:'/user/logout',
            restricted:false
        }
    ]
    const element = (item,i) => (
        <div
        key={i}
        style={{ marginTop:'10px'}} 

        > 
            <Link to = {item.link}
            style={{ fontSize: '17px',margin:'5px',color: '#08c'}}

            >
            <Icon type={item.icon}  
                style={{ fontSize: '17px',margin:'5px', color: '#08c'}} 
           
            />
            {item.text}
            </Link>
                <hr/>
        </div>
    )

    
    const showItem = () => (
        items.map((item, i)=>{
            return element(item, i)
        })
    )
    return(
        <div>
            {showItem()}
        </div>
    )
}

export default SideItems