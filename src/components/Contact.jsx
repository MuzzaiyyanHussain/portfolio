// import React from 'react';
// import { CONTACT } from '../constants';
// import { motion } from 'framer-motion';
// const Contact = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-20'>
//         <motion.h2
//         whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}
//         className='my-10 text-center text-4xl '>Get in touch</motion.h2>
//         <div className='text-center tracking-tighter'>
//             <motion.p 
//             whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}
//             className='my-4'>{CONTACT.address}</motion.p>
//             <motion.p 
//              whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}
//             className='my-4'>{CONTACT.phoneNo}</motion.p>
//             <a href="#" className='border-b'>{CONTACT.email}</a>
//         </div>
//     </div>
//   )
// }

// export default Contact
import React from "react";
import "./Contact.css";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "25d5e6ee-ddb0-4d10-894a-d9eed639a1ee");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <motion.h1
          whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}
        >Get in touch</motion.h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <motion.h1
            whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}
          >Let's Talk</motion.h1>
          <motion.p
            whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}
          >
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </motion.p>
          <motion.div 
            whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}
          className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>muzzaiyyan.work@outlook.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>xxxxxxxx</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Khandwa, Madhya Pradesh</p>
            </div>
          </motion.div>
        </div>
        <motion.form 
         whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}
        onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;