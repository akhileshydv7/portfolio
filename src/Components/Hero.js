import React from 'react'
import checkmark from "../assets/profile-pic.jpg";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Hero = () => {
    const contactButton = () => {
        window.location.href = "#contact";
    }
    const cvDownload = () => {
        window.location.href = "https://drive.google.com/drive/u/6/folders/1NtZ9rKGNsf13MEA1qX1MSWOKIhQ-uvfx";
    }

    return (
        <div className='hero'>
            <div className='image-part'>
                <img src={checkmark} alt="oops" width="400" height="400" />
            </div>
            <div className='text-part'>
                <p className='p1'>Hello, I'm</p>
                <h1 className='h1'>Akhilesh</h1>
                <p className='p2'>Frontend Developer</p>
                <div className='button-div'>
                    <button
                        className='cv-button'
                        onClick={cvDownload}>
                        Download CV
                    </button>
                    <button
                        className='contact-button'
                        onClick={contactButton}>
                        Contact Info
                    </button>
                </div>
                <div className='img'>
                    <a href='https://www.linkedin.com/in/akhileshyadav26/'>
                        <img src={linkedin}
                            alt='oops' width="32" height="32" />
                    </a>
                    <a href='https://github.com/akhileshydv7'>
                        <img src={github}
                            alt='oops' width="32" height="32" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero