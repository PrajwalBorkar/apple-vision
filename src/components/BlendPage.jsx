import React from "react";
import apple from "../assets/Apple vision image.png"


const BlendPage = () => {
    return (
        <div id="page3">
                <div id="page3-upper">
                            <img src="https://www.apple.com/v/apple-vision-pro/e/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg" alt="" />
                            <div id="page3-upper-inner">
                                <h3>WATCH THE FILM</h3>
                                <h3>WATCH THE EVENT</h3>
                            </div>  
                </div>
                <img src={apple} alt="" />
                <button> + Take a closer look at Vision Pro</button>
        </div>
    )
}

export default BlendPage;