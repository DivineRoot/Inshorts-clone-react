import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <span className='name'>
                Created With ❤️ by - {' '}
                <a href="https://github.com/DivineRoot" target="__blank">Debakalpa Roy</a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a href="https://www.instagram.com/divineroot/" alt="instagram-icon" target="__blank">
                    <i class="fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/debakalpa-roy/" alt="linkedin-icon" target="__blank">
                    <i class="fa-brands fa-linkedin-in fa-2x"></i>
                </a>
                <a href="https://github.com/DivineRoot" alt="portfolio-icon" target="__blank">
                    <i class="fa-brands fa-github fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer