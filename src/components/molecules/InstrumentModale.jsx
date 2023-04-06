import React from "react";
import "../../assets/styles/components/molecules/instrumentModale.scss"

const InstrumentModale = ()=>{
    const [instrument, setInstrument] = React.useState();   
    const [dinstrument, setdInstrument] = React.useState();   


    React.useEffect(()=>{
        setTimeout(()=>{
            document.querySelectorAll(`.emi-bubble.button`).forEach((bubble)=>{
                bubble.addEventListener("click", (e)=>{
                    setInstrument(e.target.className.split(" ")[2])
                })
            })
        }, 1000)
    }, [])


    React.useEffect(()=>{
        if(instrument){
            setdInstrument(instrument)

            // const modale = document.querySelector(".emi-instrument-modale")
            // modale.style.transition = `1s`;
            // modale.style.borderRadius = `0`;
            window.lenis.stop()
            // for(let i = 100; i >= 0; i--){
                // setTimeout(()=>{
                    // modale.style.opacity = `${1/i+1}`;
                    // modale.style.transform = `translateY(-${i}%)`;
                // }, 50);
            // }


        }else{
            window?.lenis?.start()
            const modale = document.querySelector(".emi-instrument-modale")
            if(modale){

                for(let i = 100; i >= 0; i--){
                    setTimeout(()=>{
                        modale.style.borderRadius = `${ 100 - i }%`;
                        modale.style.transform = `translateY(-${100 - i}%)`;
                    }, 50);
                }
            }
            setTimeout(()=>{
                setdInstrument(instrument)
            }, 1000)
        }
    }, [instrument])
    React.useEffect(()=>{
        if(instrument){

            const modale = document.querySelector(".emi-instrument-modale")
            modale.style.transition = `1s cubic-bezier(.69,0,.16,.99)`;
            for(let i = 100; i >= 0; i--){
                setTimeout(()=>{
                    modale.style.opacity = `${1/i+51}`;
                    modale.style.borderRadius = `${100 - i-100 }%`;
                    modale.style.transform = `translateY(-${i}%)`;
                }, 50);
            }

        }
    }, [dinstrument])


    return <>
    { 
        dinstrument ?  <div className="emi-instrument-modale">
            {
                dinstrument==="MadameGuitare" ? <>
                    <h1>Madame Guitare</h1>
                    <p>Je suis une guitare qui aime chanter le soir, une guitare magique qui raconte des histoires...</p>
                    <p>Laisse-moi te présenter ma famille !</p> 
                </> : <></>
            } {
                dinstrument==="Lucasl’Harmonica" ? <>
                    <h1>Lucas l’Harmonica</h1>
                    <p>Je m'appelle Lucas et je suis le papa harmonica. J'aime me promener dans la forêt pour écouter le silence et les oiseaux.</p>
                </> : <></>
            } {
                dinstrument==="Léonl’Accordéon" ? <>
                    <h1>Léon l’Accordéon</h1>
                    <p>Je suis Léon, le grand-père Accordéon. J'aime me plier et me déplier, me reposer et recommencer.</p>
                </> : <></>
            } {
                dinstrument==="Suzettel’Épinette" ? <>
                    <h1>Suzette l’Épinette</h1>
                    <p>Je suis Suzette, la grand-mère épinette, je suis née dans les Vosges. J'aime jouer à la belote et faire du tricot.</p>
                </> : <></>
            } {
                dinstrument==="GédéonleViolon" ? <>
                    <h1>Gédéon le Violon</h1>
                    <p> Je m'appelle Gédéon l’arrière grand-père. Je suis un très vieux violon, on me reconnaît car j'ai du poil au menton, je me tiens tout bizarre, j'ai un archet pour me promener. </p>
                </> : <></>
            }  {
                dinstrument==="BébéUkulélé" ? <>
                    <h1>Bébé Ukulélé</h1>
                    <p>Je m'appelle Ukulélé et je suis un bébé. J'aime quand on vient me chatouiller. J'ai un doudou et une tétine.</p>
                </> : <></>
            } {
                dinstrument==="JolePiano" ? <>
                    <h1>Jo le Piano</h1>
                    <p>Je suis tonton Jo, le piano. Moi j'aime faire de la moto et aussi manger des nouilles.</p>
                </> : <></>
            }

            <button onClick={()=>setInstrument(false)}>Retourner à l'histoire</button>
        </div>
        : <></> 
    }
    </>
}
export default InstrumentModale;