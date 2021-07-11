import React, { useEffect, useState } from "react";
import './styles/Comps.css'
import axios from 'axios'



const Space = (props) => {
    //console.log("this is parent function" +space)
    let spaceMain = sessionStorage.getItem("spaces").split(',')
    const currentSpace = props.space
    //const [spaceState, setSpace] = useState(spaceMain);



    function addSpace() {
        let space
        if (sessionStorage.getItem("spaces") != null) {
            space = sessionStorage.getItem("spaces").split(',')
        }
        const id = sessionStorage.getItem("ID")
        if (space.includes(currentSpace)) {
            const index = space.indexOf(currentSpace);
            if (index > -1) {
                space.splice(index, 1);
            }
            sessionStorage.setItem("spaces", space)
            //space = sessionStorage.getItem("spaces").split(',')
            //setSpace(space)
            axios.post(`http://localhost:8080/updateSpacesUser`, { space, id })
            document.getElementById(currentSpace).classList.remove("selected");

        } else if (!space.includes(currentSpace)) {
            //space = sessionStorage.getItem("spaces").split(',')

            space.push(currentSpace)
            const index = space.indexOf("undefined");
            if (index > -1) {
                space.splice(index, 1);
            }
            sessionStorage.setItem("spaces", space)
            //space = sessionStorage.getItem("spaces").split(',')
            axios.post(`http://localhost:8080/updateSpacesUser`, { space, id })
            //setSpace(space)
            document.getElementById(currentSpace).classList.add("selected");
        }
    }

    useEffect(() => {
        console.log(spaceMain)
        if (!spaceMain.includes("undefined")) {
            spaceMain.map((sp) => {
                console.log(sp)
                document.getElementById(sp).classList.add("selected");
            })
        }
    }, [])
   

    return (
        <div id={props.space} className="non-selected">
            <hr />
            <h3>{props.space}</h3>
            <p>{props.desc}</p>
            <img src={props.URL} alt="" srcset="" style={{ height: "20px", width: "20px" }} />
            <button onClick={() => { addSpace() }}>Add me</button>
            <hr />
        </div>
    )
}

export default Space;