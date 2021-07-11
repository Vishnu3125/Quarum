import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {

    const id_home_click = () => {
        document.getElementById("id_home").src = "./icons/home_fill.png";
        document.getElementById("id_following").src = "./icons/following.png";
        document.getElementById("id_answer").src = "./icons/answer.png";
        document.getElementById("id_spaces").src = "./icons/spaces.png";
    }
    const id_following_click = () => {
        document.getElementById("id_home").src = "./icons/home.png";
        document.getElementById("id_following").src = "./icons/following_fill.png";
        document.getElementById("id_answer").src = "./icons/answer.png";
        document.getElementById("id_spaces").src = "./icons/spaces.png";
    }
    const id_answer_click = () => {
        document.getElementById("id_home").src = "./icons/home.png";
        document.getElementById("id_following").src = "./icons/following.png";
        document.getElementById("id_answer").src = "./icons/answer_fill.png";
        document.getElementById("id_spaces").src = "./icons/spaces.png";
    }
    const id_spaces_click = () => {
        document.getElementById("id_home").src = "./icons/home.png";
        document.getElementById("id_following").src = "./icons/following.png";
        document.getElementById("id_answer").src = "./icons/answer.png";
        document.getElementById("id_spaces").src = "./icons/spaces_fill.png";
    }

    return (
        <span>
            <div className=" dashboard-main-div">
                <div className="dashboard-divs dashboard-logo">
                    <img src="dashboard_logo.png" alt="Paris"></img>
                </div>
                <div className="dashboard-divs dashboard-icons" onClick={id_home_click}>
                    <Link to="/"> <img id="id_home" src="./icons/home_fill.png" alt="" /> </Link>
                </div>
                <div className="dashboard-divs dashboard-icons" onClick={id_following_click}>
                    <Link to="/following"> <img id="id_following" src="./icons/following.png" alt="" /> </Link>
                </div>
                <div className="dashboard-divs dashboard-icons" onClick={id_answer_click}>
                    <Link to="/answer"> <img id="id_answer" src="./icons/answer.png" alt="" /> </Link>
                </div>
                    <div className="dashboard-divs dashboard-icons" onClick={id_spaces_click}>
                    <Link to="/spaces"> <img id="id_spaces" src="./icons/spaces.png" alt="" /> </Link>
                </div>
                        <div className="dashboard-divs dashboard-search-box-div">
                            <input className="dashboard-search-box" type="search" name="" id="" placeholder="Search Quarum" />
                        </div>
                        <div className="dashboard-divs dashboard-avatar-div">
                            <img src="dashboard-avatar.png" alt="Paris" width="30px" height="30px"></img>
                        </div>
                        <div className="dashboard-divs dashboard-button-div">
                            <input className="dashboard-button" type="button" value="Add question" />
                        </div>
                    </div>
        </span>
                )
}

                export default Header;