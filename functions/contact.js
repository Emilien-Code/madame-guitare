import Mailjet from "node-mailjet";


const mailjetClient = Mailjet.apiConnect(
  'debf1669185f888320b1ca95e3de7f3e',
  "4bb9fdd9f9c5a4ead800db81606841df",
);
async function send(request) {
  return request.then((result) => {
    console.log("Result Request", result.body);
    return "succes";
  }).catch((err) => {
    console.log("Error status", err);
    return "error"
  })
}

exports.handler = async (event, context) => {

  const {mail, organisme, message} = JSON.parse(event.body)
  
  if(message && organisme && mail){
    console.log("tout est renseigné")

    const request = mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "emilienvivier1@gmail.com",
            Name: "Madame Guitare - EMI",
          },
          To: [
            {
              Email: "emilien.ginko@gmail.com",
              Name: "vous",
            },
          ],
          TemplateLanguage: true,
          TemplateErrorReporting: {
            Email: "emilien.ginko@gmail.com",
            Name: "ERREUR MAIL MADAME GUITARE",
          },
          Subject: "Prise de contact",
          TextPart: `L'organisme ${organisme} à pris contact via votre site: Les petites Histoire de Madame Guitare. ${message}. Mail de retour : ${mail}`,
          HTMLPart: `<p>L'organisme <b>${organisme}</b> à pris contact via votre site: Les petites Histoire de Madame Guitare.</p><br/> <br/> <p>${message}</p><br /><br /><p>Mail de retour : ${mail}</p>`,
        },
      ],
    })

    const res = await send(request)

    return {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({message : "sent"}),
  };



  } else {
    
    return {
      statusCode: 500,
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({message : "not-sent"}),
  };


  }
} 