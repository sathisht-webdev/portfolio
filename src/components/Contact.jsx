import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            userName,
            email: userMail,
            message: userMessage,
            access_key: "1c440c0d-87ad-4742-85e3-9cefd5971631"
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            }).then(res => res.json());

            if (res.success) {
                alert("Message sent successfully!");
                // Clear form fields
                setUserName("");
                setUserMail("");
                setUserMessage("");
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="contact-section">
            <div className="heading-tit">
                <h1>Contact<span>Me</span></h1>
            </div>
            <div className="cont-body">
                <div className="cont-section">
                    <div className="cont-left">
                        <h4>Let's Work Together</h4>
                        <p>None of us, including me, ever do great things. But we can all do small things with great love, and together we can do something wonderful.</p>
                        <h5>Be Positive, Success will knock the door.</h5>
                        <div className="cont-list">
                            <p><FaMailBulk /> sathisht.2108@gmail.com</p>
                            <p><FaPhoneAlt /> +91 7305292449</p>
                        </div>
                        <div className="cont-social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaGithub /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="cont-right">
                        <div className="contact-form">
                            <form onSubmit={onSubmit}>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Enter your name"
                                    required
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                /><br />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={userMail}
                                    onChange={(e) => setUserMail(e.target.value)}
                                /><br />
                                <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    cols="40"
                                    rows="10"
                                    required
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                ></textarea><br />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
