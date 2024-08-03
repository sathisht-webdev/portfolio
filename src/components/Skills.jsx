import React, { useState } from "react";

import './Skills.css'


const Skills = () => {
    const [Percentage, setPercentage] = useState()
    return (
        <div className="skills-section">
            <div className="heading-tit">
                <h2>My<span>Skills</span></h2>
            </div>
            <div className="skills-body">
                <div className="skills-list">
                    <div className="skill-list-body">
                        <h2 className="skill-list-heading">Frontend Technologies</h2>
                        <div className="skill-list-1">
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar html">
                                    <progress id="html" min="0" max="100" value="90"></progress>
                                </div>
                                <h2>
                                    <label for="html">HTML</label>
                                </h2>
                            </div>
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar css">
                                    <progress id="css" min="0" max="100" value="80"></progress>
                                </div>
                                <h2>
                                    <label for="css">CSS</label>
                                </h2>
                            </div>
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar js">
                                    <progress id="js" min="0" max="100" value="75"></progress>
                                </div>
                                <h2>
                                    <label for="js">JavaScript</label>
                                </h2>
                            </div>
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar bootstrap">
                                    <progress id="bootstrap" min="0" max="100" value="80"></progress>
                                </div>
                                <h2>
                                    <label for="bootstrap">Bootstrap</label>
                                </h2>
                            </div>
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar reactjs">
                                    <progress id="reactjs" min="0" max="100" value="70"></progress>
                                </div>
                                <h2>
                                    <label for="reactjs">React Js</label>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="skill-list-body">
                        <h2 className="skill-list-heading">Backend Technologies</h2>
                        <div className="skill-list-1">
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar python">
                                    <progress id="python" min="0" max="100" value="80"></progress>
                                </div>
                                <h2>
                                    <label for="python">Python</label>
                                </h2>
                            </div>
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar django">
                                    <progress id="django" min="0" max="100" value="60"></progress>
                                </div>
                                <h2>
                                    <label for="django">Django</label>
                                </h2>
                            </div>
                        </div>


                    </div>
                    <div className="skill-list-body">
                        <h2 className="skill-list-heading">Database Management</h2>
                        <div className="skill-list-1">
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar mysql">
                                    <progress id="mysql" min="0" max="100" value="80"></progress>
                                </div>
                                <h2>
                                    <label for="mysql">MySQL</label>
                                </h2>
                            </div>
                        </div>

                    </div>
                    <div className="skill-list-body">
                        <h2 className="skill-list-heading">Website Development</h2>
                        <div className="skill-list-1">
                            <div className="progress-bar-container">
                                
                                <div className="progress-bar wp">
                                    <progress id="wp" min="0" max="100" value="70"></progress>
                                </div>
                                <h2>
                                    <label for="wp">Wordpress</label>
                                </h2>
                            </div>
                        </div>

                    </div>
                    <div className="skill-list-body">
                        <div className="skill-list-2">
                            <h3 className="skill-lastlist">IDE: <span>Visual stidio code</span></h3>
                            <h3 className="skill-lastlist">Developer Platform : <span>Git & Github</span></h3>
                        </div>

                    </div>
                </div>






            </div>


        </div>
    )
}
export default Skills;