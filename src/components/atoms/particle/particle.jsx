import React from "react"
import "./particle.scss"

const Particle = () => {
    const a = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
    return <>
        { 
            a.map((a) => {
                const random = Math.random()
                const Xrandom = Math.random()
                const Yrandom = Math.random()
                const speedX = Math.random()
                const speedY = Math.random()
                const isXPositive = Math.random > 0.5 
                const isYPositive = Math.random > 0.5 
                return <span 
                    style={{
                        opacity: `${random + 0.2}`, 
                        top: `${Yrandom * 100}vh`,
                        left: `${Xrandom * 100}%`,
                        width: `${random*15}px`, 
                        height: `${random*15}px`
                    }} 
                    className="particle emi-img-render"
                    data-parallax={true}
                    data-parallax-speed={isXPositive ? speedX : -speedX}
                    data-parallax-speed-y={isYPositive ? speedY : -speedY}
                    data-scale={1}
                    data-rotate={0}
                    data-rotate-z={0}
                    data-is-rotate-animated={false}
                    >
                    
                </span>
            }
            )
        }
    </>
}


export default Particle