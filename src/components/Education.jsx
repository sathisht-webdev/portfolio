import React from "react";
import './Education.css';


const Education = () => {
    return (
        <div className="education-section">
            <div className="heading-tit">
                <h2>My<span>Education</span></h2>
            </div>
            <div className="education-body">
                <div className="education-cont-list-1">
                    <div className="edu-list">
                        <div>
                            <h2>SSLC</h2>
                            <h4>Kalaimagal Matric Hr Sec School</h4>
                            <h5>Pattabiram,Chennai</h5>
                            <h3>89%</h3>
                        </div>
                        <div>
                            <h2>HSC</h2>
                            <h4>Jaya Matric Hr Sec School</h4>
                            <h5>Tirunindravur,Chennai</h5>
                            <h3>55%</h3>
                        </div>
                        <div>
                            <h2>B.E-Computer Science and Engineering</h2>
                            <h4>University College Of Engineering</h4>
                            <h5>Rediyarchatram,Dindigul</h5>
                            <h3><span>CGPA-</span> 7.57</h3>
                        </div>
                    </div>
                </div>
                <div className="education-cont-list-2">
                    <h2>Internship</h2>
                    <div className="internship-body">
                        <h3>Web Developer<span>4 Months</span></h3>
                        <h4>Guires Solution Private Limited -<span><a href="#">Nungambakkam,Chennai</a></span></h4>
                        <ul>
                            <li>Developed responsive web applications with HTML, CSS, and JavaScript,
                                ensuring cross-browser compatibility.
                            </li>
                            <li>Collaborated with senior developers to enhance company websites,
                                implementing new features and refining existing functionalities</li>
                            <li>Conducted comprehensive testing and debugging to maintain optimal
                                performance and functionality.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="education-cont-list-2">
                    <h2>Courses</h2>
                    <div className="internship-body">
                        <h3>Python Full Stack Master Program<span>6 Months</span></h3>
                        <h4>Besant Technology-<span><a href="#">Annanagar,Chennai</a></span></h4>
                        <h6>Technology used : HTML, CSS, Javascript, Bootstrap, ReactJs, Python & MySQL </h6>
                        <ul>
                            <li>Completed an intensive Python full stack course covering both front-end and
                                back-end web development technologies.
                            </li>
                            <li>Developed dynamic web applications using Python-based frameworks such as
                                Django and Flask for the back end, and HTML, CSS, and JavaScript for the front
                                end.</li>
                        </ul>
                    </div>
                </div>
                <div className="education-cont-list-2">
                    <h2>Curricular Activities</h2>
                    <div className="internship-body">
                        <ul>
                            <li>Performed from Employability skills development training sponsored by Naandi
                                foundation & TitanLeap.
                            </li>
                            <li>Participated in “Science and Technology Capacity Building for Industrial needs”
                                catalysed and supported by Tamil Nadu council for Science and Technology.
                            </li>
                            <li>Participated in workshop event in Java and network programming at University
                                College of Engineering, Dindigul on 22 September 2021.
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Education;