import React from "react";

const From = () => {

    const [isSent, setIsSent] = React.useState(false)


    const send = (e)=>{
        e.preventDefault
        
        if(true){     

            fetch("/.netlify/functions/contact", {
            	method: "POST",
            	body: JSON.stringify({
            		mail: document.querySelector('input[name="mail"]').value,
            		organisme: document.querySelector('input[name="organisme"]').value,
            		message: document.querySelector('textarea').value,
            	}),
            })
            .then(res => {
                setIsSent(res.ok)
            })
            .catch(e=>{
            	console.log("mal passé", e)
                setIsSent(false)
            })
        }
            }


    return (
    <>
        {
            isSent ? <form  className="sent">
                <h1>Me contacter</h1>
                <p>Votre message à bien été envoyé</p>
                <a href="https://www.facebook.com/people/Les-petites-histoires-de-Madame-Guitare/100063654932804/" target="_blank">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.032 0C8.9794 0 0 8.9794 0 20.032C0 30.0654 7.40049 38.3689 17.0389 39.8168L18.0847 39.9751V24.1899H13.3523V20.9852H18.0847V16.7295C18.0847 14.1089 18.7135 12.3829 19.7546 11.3C20.7956 10.2171 22.3339 9.67099 24.4745 9.67099C26.1861 9.67099 26.852 9.7747 27.4853 9.85239V12.4755H25.257C23.9926 12.4755 22.9553 13.181 22.4169 14.1206C21.8784 15.0602 21.7108 16.1821 21.7108 17.3253V20.9835H27.2861L26.79 24.1882H21.7108V40L22.7441 39.8595C32.5195 38.5337 40.064 30.1635 40.064 20.032C40.064 8.9794 31.0846 0 20.032 0ZM20.032 1.82109C30.1004 1.82109 38.2429 9.96359 38.2429 20.032C38.2429 28.8914 31.9017 36.1776 23.5319 37.8179V26.0092H28.3514L29.4096 19.1624H23.5319V17.3253C23.5319 16.3806 23.7048 15.5342 23.9961 15.0258C24.2874 14.5174 24.5682 14.2966 25.257 14.2966H29.3064V8.20381L28.5168 8.0971C27.9707 8.0232 26.7238 7.8499 24.4745 7.8499C22.0132 7.8499 19.9005 8.52039 18.4421 10.0373C16.9837 11.5543 16.2636 13.8131 16.2636 16.7295V19.1641H11.5312V26.011H16.2636V37.761C8.02828 36.0165 1.82109 28.7955 1.82109 20.032C1.82109 9.96359 9.96359 1.82109 20.032 1.82109Z" fill="white"/>
                    </svg>
                </a>
            </form> : <form >
                <h1>Me contacter</h1>
                <input name="mail" type="email" placeholder="Adresse Email" required/>
                <input type="text" name="organisme" placeholder="Organisme" required/>
                <textarea rows="9" name="message" placeholder="Laissez moi un message !" required/>
                <div>
                    <a href="https://www.facebook.com/people/Les-petites-histoires-de-Madame-Guitare/100063654932804/" target="_blank">
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.032 0C8.9794 0 0 8.9794 0 20.032C0 30.0654 7.40049 38.3689 17.0389 39.8168L18.0847 39.9751V24.1899H13.3523V20.9852H18.0847V16.7295C18.0847 14.1089 18.7135 12.3829 19.7546 11.3C20.7956 10.2171 22.3339 9.67099 24.4745 9.67099C26.1861 9.67099 26.852 9.7747 27.4853 9.85239V12.4755H25.257C23.9926 12.4755 22.9553 13.181 22.4169 14.1206C21.8784 15.0602 21.7108 16.1821 21.7108 17.3253V20.9835H27.2861L26.79 24.1882H21.7108V40L22.7441 39.8595C32.5195 38.5337 40.064 30.1635 40.064 20.032C40.064 8.9794 31.0846 0 20.032 0ZM20.032 1.82109C30.1004 1.82109 38.2429 9.96359 38.2429 20.032C38.2429 28.8914 31.9017 36.1776 23.5319 37.8179V26.0092H28.3514L29.4096 19.1624H23.5319V17.3253C23.5319 16.3806 23.7048 15.5342 23.9961 15.0258C24.2874 14.5174 24.5682 14.2966 25.257 14.2966H29.3064V8.20381L28.5168 8.0971C27.9707 8.0232 26.7238 7.8499 24.4745 7.8499C22.0132 7.8499 19.9005 8.52039 18.4421 10.0373C16.9837 11.5543 16.2636 13.8131 16.2636 16.7295V19.1641H11.5312V26.011H16.2636V37.761C8.02828 36.0165 1.82109 28.7955 1.82109 20.032C1.82109 9.96359 9.96359 1.82109 20.032 1.82109Z" fill="white"/>
                        </svg>
                    </a>
                    <button id="send" type="button" onClick={send}>Envoyer</button>
                </div>
            </form>
        }
    </>

    )
}

export default From