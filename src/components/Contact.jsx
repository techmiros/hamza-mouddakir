import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import ResultFun from './res';

function Contact() {
   const [result, setResult] = useState(false)
   function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm('service_uls2zrx', 'template_zdj1kai', e.target, '2ghXT7au3rcE-PyFE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(true)
  };
   
    return (
<div className="skills w-full px-20 py-20 bg-gradient-to-b from-white to-blue-900 " id="contact">
   <h1 className="text-center text-4xl text-white font-bold about pb-20">Contact-Us
      <span className="who font-poppins">Message me</span>
   </h1>
   {result ? <center className="mb-6"><ResultFun/></center> : null}
   
   <form method="" onSubmit={sendEmail} className="border-2 p-5 rounded-xl ">
   <span className="flex flex-col md:flex-row w-full">
         <input type="text" placeholder="Full Name..."
            name="name" id="fullname" className=" md:w-1/2 p-3 float-left bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500" required />
         <input type="email" placeholder="Email..." 
            name="email" id="email" className="md:w-1/2 p-3 mt-2 md:mt-0  md:ml-3 float-right  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500" required />
      </span>
      <input type="text" placeholder="Object..." 
         name="object" className="w-full p-3  bg-white border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
         disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
         invalid:border-pink-500 invalid:text-pink-600
         focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mt-2" id="object" required/>
      <input type="text" placeholder="Message..."
         name="message" className="w-full pb-20 p-3  bg-white border-2 border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
         disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
         invalid:border-pink-500 invalid:text-pink-600
         focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mt-2" id="message" required/>
      <button className="text-white p-2 rounded-md bg-orange-400 font-medium mt-3 w-full " type="submit" id="sub">Send</button>
   </form>
</div>
    );
}

export default Contact;