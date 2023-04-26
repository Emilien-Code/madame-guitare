import React from "react";
import bgWebp from "../../assets/images/sea/bg.webp";
import bgPng from "../../assets/images/sea/bg.jpg";
import rockWebp from "../../assets/images/sea/rock.webp";
import rockPng from "../../assets/images/sea/rock.png";
import particlesWebp from "../../assets/images/sea/particles.webp";
import particlesPng from "../../assets/images/sea/particles.png";
import bottomWebp from "../../assets/images/sea/bottom.webp";
import bottomPng from "../../assets/images/sea/bottom.png";
import lightPng from "../../assets/images/sea/light.png"
import lightWebp from "../../assets/images/sea/light.webp"

import fishPng from "../../assets/images/sea/fish.png"
import fishWebp from "../../assets/images/sea/fish.webp"

import medusaPng from "../../assets/images/sea/medusa.png"
import medusaWebp from "../../assets/images/sea/medusa.webp"

import raiePng from "../../assets/images/sea/raie.png"
import raieWebp from "../../assets/images/sea/raie.webp"

import poster from "../../assets/images/poster.png";

import Picture from "../atoms/Picture/Picture";
import Transition from "./Transition.astro"
import "../../assets/styles/components/sections/sea.scss";
import { getRectangle, isVisible } from "../../assets/scripts/utils/dom"
import Bubble from "../atoms/bubble/bubble.astro";


const Sea = () => {
    const scrollTrigger = ()=>{
        const triggerElement = document.querySelector(".emi-sea");
        const pinElement = triggerElement.querySelector('.pin');
        
        window?.lenis?.on("scroll", () => {      
        const object = triggerElement.getBoundingClientRect()
                
          if(object.left <= 0 && object.right >= window.innerWidth){
                const h = getRectangle(document.querySelector(".emi-sea .decore")).height
                // console.log(getRectangle(triggerElement).x)
            pinElement.style.transform = `translateY(${-getRectangle(triggerElement).x > h - window.innerHeight ? - (h - window.innerHeight) : getRectangle(triggerElement).x}px)`;
            pinElement.style.transition = ``;
         }
        })
    
    }
    
    React.useEffect(()=>{
        setTimeout(()=>{
            scrollTrigger()
                const h = getRectangle(document.querySelector(".emi-sea .decore")).height
                // console.log(h)
                // console.log(window.innerHeight)
                document.querySelector(".emi-sea").style.width = `${window.innerWidth + h}px`
        }, 100)
    },[])
    





    return <section className="emi-sea">
			{/* <Transition titre="Le lac"/> */}

                <div className="pin">
                    <button class="emi-bubble button GédéonleViolon"> Gédéon le Violon </button>
                    <Picture refClass="decore" images={[bgPng, bgPng, bgWebp, bgWebp ]} poster={poster} lazy={true} alt="background "/>
                    <Picture 
                        speedY={-0.2}
                        parallax={true}
                        isFullyVisible={true}
                        refClass="decore"
                        images={[rockPng, rockPng, rockWebp, rockWebp ]}
                        poster={poster}
                        lazy={true}
                        alt="background "/>
 {/* POISSONS */}

                    <Picture speed={0.05}
                            parallax={true}
                            scale={0.6}
                            refClass="ban-1 fish-1"
                            images={[fishPng, fishPng, fishWebp, fishWebp ]}
                            poster={poster}
                            lazy={true}
                            mobileScale={0.5}
                            alt="Poisson 1 du ban 1"/>
                    <Picture speed={0.1}
                            parallax={true}
                            scale={0.7}
                            refClass="ban-1 fish-2"
                            images={[fishPng, fishPng, fishWebp, fishWebp ]}
                            poster={poster}
                            lazy={true}
                            mobileScale={0.5}
                            alt="Poisson 2 du ban 1"/>

                    <Picture speed={0.08}
                            scale={0.5}
                            parallax={true}
                            refClass="ban-1 fish-3"
                            images={[fishPng, fishPng, fishWebp, fishWebp ]}
                            poster={poster}
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 3 du ban 1"/>

                    <Picture speed={0.12}
                            scale={0.4}
                            parallax={true}
                            refClass="ban-1 fish-4" 
                            images={[fishPng, fishPng, fishWebp, fishWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 4 du ban 1"/>

                    <Picture speed={0.17}
                            scale={0.5}
                            parallax={true}
                            refClass="ban-1 fish-5" 
                            images={[fishPng, fishPng, fishWebp, fishWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 5 du ban 1"/>

                    <Picture speed={0.06}
                            parallax={true}
                            scale={0.6}
                            refClass="ban-1 fish-6" 
                            images={[fishPng, fishPng, fishWebp, fishWebp ]}
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 6 du ban 1"/>



                    <Picture scale={0.6} 
                            parallax={true} 
                            rotate={180} 
                            speed={0.06 * 2} 
                            refClass="ban-2 fish-1" 
                            images={[fishPng, fishPng, fishWebp, fishWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 1 du ban 2"/>
                    <Picture scale={0.7} 
                            parallax={true} 
                            rotate={180} 
                            speed={0.07 * 2} 
                            refClass="ban-2 fish-3" 
                            images={[fishPng, fishPng, fishWebp, fishWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 4 du ban 2"/>
                    <Picture scale={0.5} 
                            parallax={true} 
                            rotate={180} 
                            speed={0.05 * 2} 
                            refClass="ban-2 fish-4" 
                            images={[fishPng, fishPng, fishWebp, fishWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Poisson 4 du ban 2"/>


                    <Picture scale={1} 
                            parallax={true} 
                            speed={-0.3} 
                            refClass="raie-1" 
                            images={[raiePng, raiePng, raieWebp, raieWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Raie 1"/>
                    <Picture scale={0.5} 
                            parallax={true} 
                            speed={-0.1} 
                            refClass="raie-2" 
                            images={[raiePng, raiePng, raieWebp, raieWebp ]} 
                            poster={poster} 
                            lazy={true} 
                            mobileScale={0.5}
                            alt="Raie 2"/>

                    <Picture parallax={true} 
                            speedY={-0.5} 
                            refClass="medusa-1"
                            images={[medusaPng, medusaPng, medusaWebp, medusaWebp ]}
                            poster={poster}
                            mobileScale={0.5}
                            lazy={true}
                            alt="Méduse 1"/>
                    <Picture scale={0.7} 
                            parallax={true} 
                            speedY={-0.3} 
                            rotate={180}
                            refClass="medusa-2"
                            images={[medusaPng, medusaPng, medusaWebp, medusaWebp ]}
                            poster={poster}
                            lazy={true}
                            mobileScale={0.5}
                            alt="Méduse 2"/>



                    <Picture refClass="decore"
                            images={[particlesPng, particlesPng, particlesWebp, particlesWebp ]}
                            poster={poster}
                            lazy={true}
                            alt="background "/>
                    <Picture refClass="decore"
                            images={[bottomPng, bottomPng, bottomWebp, bottomWebp ]}
                            poster={poster}
                            lazy={true}
                            alt="background "/>
 {/* POISSONS */}

                    <Picture scale={0.5} mobileScale={0.5} parallax={true}  rotate={180} speed={0.15} refClass="ban-2 fish-2" images={[fishPng, fishPng, fishWebp, fishWebp ]} poster={poster} lazy={true} alt="poisson "/>
                    <Picture refClass="decore" images={[lightPng, lightPng, lightWebp, lightWebp ]} poster={poster} lazy={true} alt="background "/>
                </div>
        </section>

}
export default Sea;





