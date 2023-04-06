import React from "react";

import "../../assets/styles/components/loader.scss"
const Loader = ()=>{
    const [progress, setProgress] = React.useState(0)
    const [isLoaded, setIsLoaded] = React.useState(0)
    React.useEffect(()=>{
        
        updateProgress(0)

        document.querySelector("#number").style.animation  = `2s cubic-bezier(.69,0,.16,.99)` //cubic-bezier(.32,-0.22,.77,.99)";
        document.querySelector("#number").style.transform  = `translate(-50%, ${-315/2}px)` //cubic-bezier(.32,-0.22,.77,.99)";
        
        
        
        setTimeout(()=>{
            
            window.lenis.stop()
            
        },500)
    },[])
    const updateProgress = (i) => {
        
        
        if(i <= 10){
            
            setTimeout(()=>{
                setProgress(i)      
                updateProgress(i+1)  
            }, 500)
            i > 4 ? document.querySelector("#number").style.transform  = `translate(-50%, ${-315}px)`  : "" 

        } else {

            document.querySelector(".emi-loader").style.transition  = "0s" //cubic-bezier(.32,-0.22,.77,.99)";
            document.querySelector(".emi-loader").style.backdropFilter = "blur(0px)"
            document.querySelector(".emi-loader").style.transition  = "0.75s cubic-bezier(.74,-0.3,.77,.99)" //cubic-bezier(.32,-0.22,.77,.99)";
            document.querySelector(".emi-loader").style.borderRadius = `100%`
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
            <span>
                <div id="number">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                {/* {progress} */}
            </span>
            <h1>Les Petites Histoires de Madame Guitare</h1>
            <p>Designé et développé par Ēmi </p>
        </div>
    }
    return <></>
}

export default Loader;