import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { 
      "from_name": name, 
      "from_email": email, 
      "message": message, 
    },
    process.env.NEXT_PUBLIC_KEY
  );
};

export default mail;
