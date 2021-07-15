import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import get_data from "./Realm"
import "./styles/Comps.css"

// {Object.keys(dat.answers).map((item) => (
//     <li>
//         <span>{dat.answers[item].answer}</span>
//     </li>
// ))}

const Home = () => {

    const [data, setData] = useState();

    useEffect(() => {
        get_data("hello").then((datas) => {
            //console.log(datas)
            setData(datas)
        })
    }, [])

    return (
        <div className="main-container-all">
                {data ? data.map((dat) =>
                    <div className="home-question-ans-div">
                        <h3 className="home-question">{dat.question}</h3>
                        {/* <p className = "home-answer">{dat.answers[1].answer}</p> */}
                    </div>
                ) : <Loader />}
        </div>
    )
}

export default Home;