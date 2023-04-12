import nodemailer from "nodemailer"

const port = 465
const srv = "smtp.gmail.com"
const isSecure = true


async function main(dest, from, message) {

  let transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "look@emi-studio.fr", 
      pass: "V1V13r&m1l13n54", 
    },
  });

  console.log("ici", dest, from, message)
  
  let info = await transporter.sendMail({
    from: '"Emilien" <look@emi-studio.fr>', 
    to: [`emilien.ginko@gmail.com`], 
    subject: "Prise de contact", 
    text: `L'organisme ${from} à pris contact via votre site: Les petites Histoire de Madame Guitare. ${message}. Mail de retour : ${dest}`,
    html: `<p>L'organisme <b>${from}</b> à pris contact via votre site: Les petites Histoire de Madame Guitare.</p><br/> <br/> <p>${message}</p><br /><br /><p>Mail de retour : ${dest}</p>`,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}


export default function handler(request, response) {

  const {mail, organisme, message} = JSON.parse(request.body)
  
  if(message && organisme && mail){
    console.log("tout est renseigné")

    main(mail, organisme, message).catch(console.error);
  }



  return response.end(`contact ${request.body.mail}`);
} 