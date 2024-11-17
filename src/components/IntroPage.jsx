import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
  
const IntroPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
   
        // Ensure the element is defined before applying the animation
        if (videoRef.current) {
            const animation = gsap.to(videoRef.current, {
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "2% top",
                    end: "bottom top",
                    onEnter: () => videoRef.current.play(),
                    onLeave: () => videoRef.current.pause(),
                },
            });

            // Clean up ScrollTrigger on component unmount
            return () => {
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
            };
        }
    }, []); // Add an empty dependency array to run only once

    return (
        <div id="page">
            <video
                ref={videoRef}
                src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4"
                muted
            ></video>
            <nav>
                <h3>Vision Pro</h3>
                <button>Notify me</button>
            </nav>
        </div>
    );
};

export default IntroPage;
