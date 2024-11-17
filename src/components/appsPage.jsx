import gsap from "gsap";
import { useEffect } from "react";


const AppsPage =  () => {
    useEffect( () =>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#page4",
                start: "top top",
                scrub: 1,
                scroller: "#main",
                pin:true,
            }
        });

        tl.to("#page4>#center-page4",{
            top:"-50%"
        });
    },[]);


    return(
        <div id="page4">
            <div id="center-page4">
                    <div>Apps</div>
                    <h1>Free your desktop. And your apps will follow.</h1>
            </div>
        </div>
    );

};


export default AppsPage;

