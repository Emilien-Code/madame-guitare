import React from "react";
import "../../assets/styles/components/molecules/menuIcon.scss"
import "../../../public/In_A_World_Of_Natural_Wonder.mp3"


const SoundIcon = () => {
    const [isSound, setIsSound] = React.useState(true)
    const [audio, setAudio] = React.useState(new Audio('../public/In_A_World_Of_Natural_Wonder.mp3'))

    React.useEffect(()=>{
        audio.addEventListener("canplaythrough", ()=>{
            audio.play();
            audio.volume = 0.3
        })
    }, [])
    React.useEffect(()=>{
        if(isSound){
            audio.play();
            audio.volume = 0.3
        } else {
            audio.pause()
        }
    }, [isSound])

    return (
        <button className="soundIcon" onClick={()=>{;setIsSound(!isSound)}}>
            { 
                isSound ?<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.5" cy="18.5" r="17.5" transform="rotate(90 18.5 18.5)" stroke="white" stroke-miterlimit="12.7455"/>
                <rect x="13" y="15" width="1" height="13" rx="0.5" fill="white"/>
                <rect x="18" y="12" width="1" height="16" rx="0.5" fill="white"/>
                <rect x="23" y="9" width="1" height="19" rx="0.5" fill="white"/>
                </svg>
                 : <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="18.5" cy="18.5" r="17.5" transform="rotate(90 18.5 18.5)" stroke="white" stroke-miterlimit="12.7455"/>
                 <rect x="13" y="24" width="1" height="4" rx="0.5" fill="white"/>
                 <rect x="18" y="25" width="1" height="3" rx="0.5" fill="white"/>
                 <rect x="23" y="24" width="1" height="4" rx="0.5" fill="white"/>
                 </svg>
                 
            }
        </button>
        
    )

}
export default SoundIcon