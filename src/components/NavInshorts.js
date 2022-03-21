import React from 'react'
import "./NavInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshorts = ({ setCategory }) => {
    return (
        <div className='nav'>
            <div className='menu'>
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img className='logo'
                style={{ cursor: "pointer" }}
                src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' />
        </div>
    )
}

export default NavInshorts