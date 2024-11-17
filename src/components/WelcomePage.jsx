import React, { useEffect } from "react";
import gsap from "gsap";


const WelcomePage = () => {    
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page1",
                start: "top top",
                scrub: 1,
                scroller: "#main",
                pin:true,
            }
        });
        tl.to("#page1>h1",{
            top:"-50%",
        });
    },[]);
    
    return (
        <>
        <div id="page1">
            <h1>Welcome to the era of spatial computing</h1>
            <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4" autoPlay loop muted></video>
        </div>
        <div id="page2">
      <h1>Apple Vision Pro seamlessly blends <br/> digital content with your physical space.</h1>
         <video src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4" autoPlay loop muted ></video>
    </div>
    </>
    );
};
export default WelcomePage;