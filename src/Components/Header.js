import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='name'>
                <p>Akhilesh Yadav</p>
            </div>
            <ul className='header-list'>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header