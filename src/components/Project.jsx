import React from "react";
import Project1 from '../assets/project1.jpeg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpeg';
import './Project.css';


const Project = () => {
    return (
        <div classNameName="project-section">
            <div className="heading-tit">
                <h2>My<span>Project</span></h2>
            </div>
            <div className="project-body">
                <div className="project-list">
                    <div className="project-list-1">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Project1} alt="Avatar" />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Online course registration system</h1>
                                    <p>Tools Used :HTML, CSS, Javascript, Python & MySQL</p>
                                    <ul>
                                        <li>An online course registration system is a web-based platform that allows
                                            students to enroll in courses.</li>
                                        <li>
                                            t provides a convenient and centralized interface for students to view
                                            available courses, check seat availability, and complete the registration
                                            process electronically.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h3>Project- l</h3>

                    </div>
                    <div className="project-list-1">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Project2} alt="Avatar"/>

                                </div>
                                <div className="flip-card-back">
                                    <h1>Camera vision based animal beat back system</h1>
                                    <p>Tools Used :HTML, CSS, Javascript, Python & MySQL</p>
                                    <ul>
                                        <li></li>
                                        <li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Project- ll</h3>
                        </div>

                    </div>
                    
                    
                    <div className="project-list-1">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Project3} alt="Avatar"/>
                                </div>
                                <div className="flip-card-back">
                                    <h1>Sample Website</h1>
                                    <p>Tools Used : HTML,CSS , Wordpress</p>
                                    <ul>
                                        <li>Creating sample website using wordpress</li>
                                        <li>User friendly
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h3>Project- lll</h3>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default Project;