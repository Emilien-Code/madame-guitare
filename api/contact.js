import Mailjet from "node-mailjet";


const mailjetClient = Mailjet.apiConnect(
  'debf1669185f888320b1ca95e3de7f3e',
  "4bb9fdd9f9c5a4ead800db81606841df",
);
async function send(request) {
  return request
  .then((result) => {
    console.log("Result Request", result.body);
    return "succes";
  })
  .catch((err) => {
    console.log("Error status", err);
    return "error"
  })
}

export default  async function handler(request, response) {

  const {mail, organisme, message} = JSON.parse(request.body)
  
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
            Email: "look@emi-studio.fr",
            Name: "ERREUR MAIL MADAME GUITARE",
          },
          Subject: "Prise de contact",
          TextPart: `L'organisme ${organisme} à pris contact via votre site: Les petites Histoire de Madame Guitare. ${message}. Mail de retour : ${mail}`,
          HTMLPart: `<p>L'organisme <b>${organisme}</b> à pris contact via votre site: Les petites Histoire de Madame Guitare.</p><br/> <br/> <p>${message}</p><br /><br /><p>Mail de retour : ${mail}</p>`,
        },
      ],
    })

    const res = await send(request)

    return response.end(res);


  } else {
    
    return response.end("eRreur");

  }
} 


/**
 * 
 * 
 * 
 * // Create en headless endpoints for sending emails with maijet with the minimal following parameters:
// - type: type of email we want to send
// - to: email address of the recipient
// - TemplateId: id of the template we want to use

const mailjet = require("node-mailjet");
const { MAILJET_API_KEY, MAILJET_SECRET_KEY } = process.env;
console.log(mailjet, MAILJET_API_KEY, MAILJET_SECRET_KEY);
const mailjetClient = mailjet.connect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

const sendMail = async (data) => {
  let request = null;
  console.log(data);
  switch (data.type) {
    case "track-id":
      request = mailjetClient.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "donael@bihua.f",
              Name: "Librairie Expérience - Bihua",
            },
            To: [
              {
                Email: data.to,
                Name: "vous",
              },
            ],
            TemplateID: 4106178,
            TemplateLanguage: true,
            TemplateErrorReporting: {
              Email: "donael.walter@hotmail.com",
              Name: "Donaël Walter",
            },
            Subject:
              "Votre numero de suivie de commande du site Librairie Expérience",
            Variables: {
              clientName: data.to,
              trackNumber: data.trackId,
              trackUrl: "https://www.laposte.fr/outils/track-a-parcel",
            },
          },
        ],
      });

      await request
        .then((result) => {
          console.log("Result Request", result.body);
          return {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*", // Allow from anywhere
            },
            body: JSON.stringify(result.body),
          };
        })
        .catch((err) => {
          console.log("Error status", err);
          return {
            statusCode: 500,
            headers: {
              "Access-Control-Allow-Origin": "*", // Allow from anywhere
            },
            body: JSON.stringify(err),
          };
        });
      break;

    default:
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow from anywhere
        },
        body: "Auccun form de mail",
      };
      break;
  }

  // if not return before, it will return an error
  return {
    statusCode: request ? 200 : 500,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow from anywhere
    },
    body: JSON.stringify(request.body),
  };
};

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  return sendMail(data);
};


 */