import React from "react"

const WordParser = ({children})=>{
    const parsedString = children.split()
    return <>
        {
            parsedString.map((letter, index)=>{
                return <span key={index} className="emi-word-mask">
                    <span className={`emi-word-content ${letter===" " ? "white-space" : ""}`}>
                        {letter}
                    </span>
                </span>
            })
        }
    </>
}



export default WordParser