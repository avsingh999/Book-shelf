import React from 'react'
import SideNav from 'react-simple-sidenav';
import SideNavItem from './sideNav_item';


const Nav = (props) => {
    return(
        <div >
            <SideNav

                showNav={props.showNav}
                onHideNav = {props.onHideNav}
                navStyle={{
                    background:"#eef",
                    maxWidth:'300px'
                }}
            >

            <SideNavItem/>

            </SideNav>

        </div>
    )
}

export default Nav