import React, { useEffect, useState } from "react";
//import { get_spaces } from "./Realm"
import Loader from "./Loader";
import axios from 'axios'
import Space from './Space'
import './styles/Comps.css'

const Spaces = () => {

    const [spaces, setSpaces] = useState(0);
    //const space = sessionStorage.getItem("spaces").split(',')

    useEffect(() => {
        axios.get(`http://localhost:8080/spaces`)
            .then(res => {
                const validify = res.data;
                setSpaces(validify)
                console.log(validify)
            })
    }, [])

    return (
        <div className="main-container-all">
            <h1>Add new space</h1>
            <form id="uploadForm" enctype="multipart/form-data" action="http://localhost:8080/uploadNewSpace" method="post">
                Name of the new space<br />
                <input type="text" name="name" id="name" /> <br /><br />

                Discription for new space<br />
                <input type="text" name="disc" id="disc" /><br /><br />

                select image for new space<br />
                <input type="file" name="myfile" /> <br /><br />

                <input type="submit" value="Add new Space" name="submit" /> <br /><br />
                <span id="status"></span>
            </form>

            <h2>Spaces</h2>
    
            {spaces ? spaces.map((space) => {
                return <Space id={space._id} space={space.Space} desc={space.Description} URL={space.URL}/> })
                :
                <Loader/>
            }
        </div>
    )
}
export default Spaces