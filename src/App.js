    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import React, { useEffect } from "react";
    import gsap from "gsap";
    import LocomotiveScroll from 'locomotive-scroll';
    import 'locomotive-scroll/dist/locomotive-scroll.css';

    import IntroPage from "./components/IntroPage";
    import WelcomePage  from "./components/WelcomePage";
    import AppsPage from "./components/appsPage";


    const App = () => { 
        useEffect(() =>{
            gsap.registerPlugin(ScrollTrigger);

            const locoScroll = new LocomotiveScroll({
                el: document.querySelector('#main'),
                smooth: true    
            });

            locoScroll.on("scroll",ScrollTrigger.update);

            ScrollTrigger.scrollerProxy("#main",{
                scrollTop(value){
                    return arguments.length ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect(){
                    return {
                        top: 0,
                        left:0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: document.querySelector("#main").style.transform ? "trasnform" : "fixed"
            });
            ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
            ScrollTrigger.refresh();

            return() => {
                if (locoScroll) locoScroll.destroy();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }
        },[]);



        return(
            <div id="main">
            <IntroPage />
            <WelcomePage />
            <AppsPage />
            </div>
            
        )
    };

    export default App;
