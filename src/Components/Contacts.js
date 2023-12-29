import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j5psr9g', 'template_idnx8zq', form.current, 'lBnkkXjD_H9kkfabH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "44px 0" }}>
            <div style={{ textAlign: "center" }} >
                <p>Get in touch</p>
                <h1 style={{ marginTop: "4px", fontSize: "3rem" }} >Contact Me</h1>
            </div>
            <div style={{
                display: 'flex', justifyContent: "center", border: "1.5px solid grey", borderRadius: "2rem",
                margin: "2rem auto", padding: "25px", gap: "2rem"
            }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }} >
                    <img src={email} alt="email" width="35" height="35" />
                    <p><a href="mailto:work.akhilesh7@gmail.com" style={{ color: "black", textDecoration: "none" }}>Example@gmail.com</a></p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                    <img src={linkedin} alt="email" width="30" height="30" />
                    <p><a href="https://www.linkedin.com/in/akhileshyadav26/" style={{ color: "black", textDecoration: "none" }}>Linkedin</a></p>
                </div>
            </div>
            <p style={{ margin: "auto", padding: "0 0 1rem 0", fontSize: "1.5rem" }} >Write me a message ↓</p>
            <div style={{ marginLeft: "", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <form ref={form} onSubmit={sendEmail} >
                    <div style={{ display: "flex", gap: "6rem", }} >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ padding: "0 0 8px 0" }}>
                                Your Name
                            </label>
                            <input style={{ padding: "8px", }} required
                                type="text" placeholder="john" name="user_name" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                            <label style={{ padding: "0 0 8px 0" }}>
                                Your Email
                            </label>
                            <input style={{ padding: "8px" }} required
                                type="email" placeholder="john@gmail.com" name="user_email" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "3rem" }} >
                        <label style={{ padding: "0 0 8px 0" }}>
                            Message
                        </label>
                        <textarea style={{ padding: "8px" }} name="message" rows="8" cols="50" required placeholder="Your Message ..." />
                        <input style={{
                            margin: "1rem 0", padding: "12px", backgroundColor: "gray", border: "none", borderRadius: "10px",
                            width: "20%", color: "white", cursor: "pointer"
                        }} type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Contacts