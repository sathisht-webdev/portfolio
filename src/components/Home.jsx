import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import './Home.css'
import AutoType from "./Autotype";
import Resume from '../assets/resume.pdf'


const Home = () => {
    return (
        <div className="home-section">
            <div className="home-section-heading">
                <a href={Resume} target="_blank" download="Sathish_Web_dev">Download Resume</a>
            </div>
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Sathish Thangavel </h1>
                <h3><span><AutoType/></span></h3>
                <p> I'm Aspiring Full stack developer with few experience in creating Website and Web application.
                </p>
                <div className="home-cont-social-icons">
                    <a href="#" id="facebook"><FaFacebook /></a>
                    <a href="#" id="instagram"><FaInstagram /></a>
                    <a href="#" id="git"><FaGithub /></a>
                    <a href="#" id="linkedin"><FaLinkedin /></a>
                    <a href="#" id="whatsapp"><FaWhatsapp /></a>
                </div>
                <div className="about-mebtn">
                    <a className="btn-box tabContent" href="/about">More About Me</a>
                </div>
            </div>
        </div>
    );
}

export default Home;