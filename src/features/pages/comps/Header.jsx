import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
// import { useState } from 'react';

const Header = () => {

    const name = sessionStorage.getItem("name");

    const [space, setspace] = useState([])
    const [quest, setquest] = useState(1)

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

    const askQuestion = () => {
        document.getElementById("myModal").style.display = "block";
        axios.get(`http://localhost:8080/spaces`)
            .then(res => {
                setspace(res.data)
            })
    }

    const askQuestionClose = () => {
        document.getElementById("myModal").style.display = "none";
    }

    const nextBlock = () => {
        if (quest === 1) {
            document.getElementById("question-block").style.display = "none";
            document.getElementById("space-block").style.display = "block";
            setquest(2)
        }
        else if (quest === 2) {
            const question = document.getElementById("question").value;
            const space = document.querySelector('input[name="space"]:checked').value;
            const id = sessionStorage.getItem("ID")
            const name = sessionStorage.getItem("name")
            axios.post(`http://localhost:8080/addQuestions`, { question, space, id, name }).then(function (response) {
                console.log(response);
            })
            document.getElementById("space-block").style.display = "none";
            document.getElementById("question-buttons").style.display = "none";
            document.getElementById("final-block").style.display = "block";
            document.getElementById("modal-content").style.height = "20%";

            //document.getElementById("chat").appendChild(avatar);
        }

    }
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

    return (
        <span >
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
                    <input className="dashboard-button" id="myBtn" type="button" value="Add question" onClick={askQuestion} />
                </div>
            </div>

            {/* the question model appears from here */}
            <div id="myModal" className="question-modal">
                <div className="question-modal-content" id="modal-content">
                    <span className="close" onClick={askQuestionClose}>&times;</span>
                    <br />
                    <div className="question-modal-body-question-block" id="question-block">
                        <h3>Add Question</h3>
                        <img src="dashboard-avatar.png" alt="Paris" width="60px" height="60px" ></img>
                        <p >{name} asked</p>
                        <input type="text" name="question" id="question" className="question-input" />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="question-modal-body-space-block" id="space-block">
                        <h3>Select space</h3>
                        {space ? space.map(spa => (
                            <div className="question-space-selection" style={{ display: "inline-block" }}>
                                <input type="radio" id={spa.Space} name="space" value={spa.Space} />
                                <label for={spa.Space}> {spa.Space}</label>
                            </div>
                        )) : <Loader />}
                    </div>
                    <div className="question-modal-body-final-block" id="final-block">
                        <h1>
                            Question Added
                        </h1>
                    </div>
                    <div id="question-buttons">
                        <hr />
                        <input type="button" value="Continue" className="question-continue-button" onClick={nextBlock} />
                        <input type="button" value="Cancel" className="question-cancel-button" onClick={askQuestionClose} />
                    </div>
                </div>
            </div>

        </span>
    )
}

export default Header;