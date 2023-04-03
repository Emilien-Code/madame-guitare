import React from "react";

import "../../assets/styles/components/loader.scss"
const Loader = ()=>{
    const [progress, setProgress] = React.useState(0)
    const [isLoaded, setIsLoaded] = React.useState(0)
    React.useEffect(()=>{
        updateProgress(0)
        setTimeout(()=>{

            window.lenis.stop()
        },500)
    },[])
    const updateProgress = (i) => {


        if(i <= 10){
            setTimeout(()=>{
                setProgress(i)      
                updateProgress(i+1)  
            }, 200)
        }else{
            document.querySelector(".emi-loader").style.transition  = "0s" //cubic-bezier(.32,-0.22,.77,.99)";
            document.querySelector(".emi-loader").style.backdropFilter = "blur(0px)"
            document.querySelector(".emi-loader").style.transition  = "1s cubic-bezier(.74,-0.3,.77,.99)" //cubic-bezier(.32,-0.22,.77,.99)";
            document.querySelector(".emi-loader").style.borderRadius = "100%"
            document.querySelector(".emi-loader").style.transform  = "translateY(-100%)";
            setTimeout(()=>{
                setIsLoaded(true)
                window.lenis.start()
            }, 1000)

        }

    }
    if(!isLoaded){

        return <div className="emi-loader">
            <div className="cache">

            </div>
            <span>{progress}</span>
            <h1>Les Petites Histoires de Madame Guitare</h1>
            <p>Designé et développé par Ēmi Studio</p>
        </div>
    }
    return <></>
}

export default Loader;