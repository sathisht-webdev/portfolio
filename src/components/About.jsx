import React from "react";
import './About.css';
import Photo from '../assets/photo.jpg'
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";


const About = () => {
    const [isClose, setIsClose] = useState(false)
    const Buttons = () => setIsClose(!isClose);
    const [isStrength, setIsStrength] = useState(false)
    const [isHobbies, setIsHobbies] = useState(false)
    const [isActivity, setIsActivity] = useState(false)
    const Strength = () => setIsStrength(!isStrength)
    const Hobbies = () => setIsHobbies(!isHobbies)
    const Activity = () => setIsActivity(!isActivity)
    return (
        <div className="about-section">
            <div className="heading-tit">
                <h2>About<span>Me</span></h2>
            </div>
            <div className="about-body">
                <div className="about-sec-1">
                    <div className="about-sec-1-left">
                        <img src={Photo} alt="Photo"/>
                    </div>
                    <div className="about-sec-1-right">
                        <h4>Full Stack Developer</h4>
                        <p>Hello, I'm an aspiring Full Stack Web Developer with a strong passion for creating captivating and functional web applications. As a recent graduate with a degree in Computer Science, I have embarked on this exciting journey to combine my love for problem-solving and creativity in the world of web development.</p>
                        <div className="about-sec-1-btn">
                            <a href="#list-2">
                            <h2 onClick={Buttons} style={{ display: isClose ? "none" : "block" }}>View more</h2>
                            </a>
                            
                        </div>
                    </div>


                </div>
                <div className="about-sec-2" style={{ display: isClose ? "block" : "none" }}>
                    <div className="about-sec-2-body">
                        <div className="about-sec-2-body-left">
                            <h2 id="list-2">Biographical Data</h2>
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td>:  T.Sathish</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>:  21-08-2001</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>:  Male</td>
                                </tr>
                                <tr>
                                    <td>Language Known</td>
                                    <td>:  English & தமிழ்</td>
                                </tr>
                                <tr>
                                    <td>Contact</td>
                                    <td>:  +91 7305292449</td>
                                </tr>
                                <tr>
                                    <td>Mail</td>
                                    <td>: sathisht.2108@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>:  B+</td>
                                </tr>
                                <tr>
                                    <td>Father's Name</td>
                                    <td>:  Thangavel S</td>
                                </tr>
                                <tr>
                                    <td>Mother's Name</td>
                                    <td>:  Murugeshwari T</td>
                                </tr>
                                <tr>
                                    <td>Sister's Name</td>
                                    <td>:  SathyaSheela T</td>
                                </tr>
                            </table>
                        </div>
                        <div className="about-sec-2-body-right">
                            <div className="about-sec-2-body-right-bars">
                                <div className="about-sec-2-body-right-bar-1">
                                    <h3 onClick={Strength}>Strength</h3>
                                    <div className="about-sec-2-body-right-bar-1-1" style={{ display: isStrength ? "none" : "block" }}>
                                        <ul>
                                            <li>Passion of coding</li>
                                            <li>Problem solving</li>
                                            <li>Adapdable</li>
                                            <li>Self motivated & Confident</li>
                                            <li>Wrapping Sense</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="about-sec-2-body-right-bar-2">
                                    <h3 onClick={Hobbies}>Hobbies</h3>
                                    <div className="about-sec-2-body-right-bar-1-1" style={{ display: isHobbies ? "block" : "none" }}>
                                        <ul>
                                            <li>Coding</li>
                                            <li>Gaming</li>
                                            <li>Cooking</li>
                                            <li>Travelling</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="about-sec-2-body-right-bar-3">
                                    <h3 onClick={Activity}>Other Activities</h3>
                                    <div className="about-sec-2-body-right-bar-1-1" style={{ display: isActivity ? "block" : "none" }}>
                                        <ul>
                                            <li>YOGA - Participate & Win various District levels</li>
                                            <li>VolleyBall - Participate & Win various District levels</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="about-sec-1-btn">
                        <div className="about-sec-1-button">
                            <h2 onClick={Buttons} style={{ display: isClose ? "block" : "none" }}><FaArrowCircleUp/></h2>

                        </div>
                        
                    </div>


                </div>





            </div>

        </div>
    );
}
export default About;