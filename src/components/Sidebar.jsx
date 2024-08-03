import React, { useState } from "react";
import { FaFileCode, FaHome, FaUserSecret, FaGraduationCap, FaCode, FaPhoneAlt, FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = ({ children }) => {
    const alertmessage = () =>{
        alert("Thanks for visting.Bye")
    }
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            newname: "Home",
            icon: <FaHome />
        },
        {
            path: "/about",
            name: "About",
            newname: "About",
            icon: <FaUserSecret />
        },
        {
            path: "/education",
            name: "Education",
            newname: "Education",
            icon: <FaGraduationCap />
        },
        {
            path: "/skills",
            name: "Skills",
            newname: "Skills",
            icon: <FaCode />
        },
        {
            path: "/project",
            name: "Project",
            newname: "Project",
            icon: <FaFileCode />
        },
        {
            path: "/contact",
            name: "Contact",
            newname: "Contact",
            icon: <FaPhoneAlt />
        },
    ]
    return (
        <div className="container1">
            <div className="sidebar1" style={{ width: isOpen ? "300px" : "80px" }}>
                <div className="top_section1">
                    <h1 style={{ display: isOpen ? "block" : "none" }} >Portfolio</h1>
                    <div className="bars1" style={{ marginLeft: isOpen ? "80px" : "0px" }}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link1" activeclassName="active">
                            <div className="icon-1">{item.icon}<span style={{ display: isOpen ? "none" : "block" }}>{item.newname}</span></div>
                            <div className="lintext1" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className="bottom-section"><a href="https://www.google.com/" target="_blank" onClick={alertmessage}>
                <IoIosLogOut />
                <p>Logout</p>

                </a>
                    
                </div>
            
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;