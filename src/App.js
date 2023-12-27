import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import "./App.css";

const App = () => {
 const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit 
    let validate = validator.isEmail(e.target[1].value)
    if(validate){
      emailjs.sendForm(`${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY}`)
      .then((result) => {
          // show the user a success message
          console.log(result);
      }, (error) => {
          // show the user an error
          console.log(error);
      });
    }
 };

 return (
   <form ref={form} onSubmit={sendEmail} className='App'>
    <div>
      <label>Name</label> <br/>
      <input type="text" name="user_name" required/>
    </div>
    <div>
      <label>Email</label><br/>
      <input type="email" name="user_email" required />
    </div>
    <div>
      <label>Message</label><br/>
      <textarea name="message" required />
    </div>
     <input type="submit" value="Send" />
   </form>
 );
};

export default App;
