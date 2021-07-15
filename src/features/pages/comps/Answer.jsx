import axios from "axios";
import React , {useState, useEffect}from "react";


const Answer = () => {
    const [unansweredQuestions, setunansweredQuestions] = useState()
    const name = sessionStorage.getItem("name")

    useEffect(() => {
        let space
        if (sessionStorage.getItem("spaces") != null) {
            space = sessionStorage.getItem("spaces").split(',')
        }
        axios.post(`http://localhost:8080/unansweredQuestions`, {space})
            .then(res => {
                console.log(res.data)
                setunansweredQuestions(res.data)
                //console.log(unansweredQuestions)
            })
    }, [])

    const openEditor = (id) => {
        if(document.getElementById(id).style.display === "block")
        {
            document.getElementById(id).style.display = "none"
        }else{
            document.getElementById(id).style.display = "block"
        }
    }

    const submitAnswer = (textid, id) => {
        let answer = document.getElementById(textid).value
        let userid = sessionStorage.getItem("ID")
        axios.post(`http://localhost:8080/addAnswer`, {answer, id, name, userid})
            .then(res => {
                console.log(res.data)
                //console.log(unansweredQuestions)
            })
    }
     
    return(
        <div className="main-container-all">
            <h2>Hey</h2>
            {unansweredQuestions ? unansweredQuestions.map((unquest)=> (
                <div className="answer-main-div">
                    <p>{unquest.space}</p><span>{unquest.username}</span>
                    <h3>
                    {unquest.question}
                    </h3>
                    <input type="button" value="Answer"  onClick={() => openEditor(unquest._id)}/>
                    <div className="answer-editor" id={unquest._id}>
                        <div className="answer-editor-div1">
                            <img src="dashboard-avatar.png" alt="Paris" width="30px" height="30px"></img>
                            <span>{name}</span>
                        </div>
                        <div className="answer-editor-div2">
                            <textarea name="answer-textarea" id={unquest._id+"text"} className="answer-textarea" />
                        </div>
                        <div className="answer-editor-div3">
                            <input type="button" value="post" onClick={() => submitAnswer(unquest._id+"text", unquest._id)}/>
                        </div> 
                    </div>
                </div>
            )): <h2>Loading</h2> }
        </div>
    )
}

export default Answer;