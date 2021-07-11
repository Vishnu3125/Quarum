import React from "react";
import "./styles/Loader.css"

const Loader = () => {

    return (
        <span>
            <div class="container">
                <div class="loader" >
                    <div class="circle" id="a"></div>
                    <div class="circle" id="b"></div>
                    <div class="circle" id="c"></div>
                </div>
                <div class="caption">We are almost there...</div>
            </div>
        </span>
    )
}

export default Loader;