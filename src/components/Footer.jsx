function Footer() {
    return ( 
<footer className="bg-blue-900 h-full relative text-center px-20 pb-5">
   <span className="flex flex-col md:flex-row md:justify-around w-full">
      <ul className="text-left">
         <li className="text-white py-2 hover:scale-110"><a href="https://web.facebook.com/hamza.modakur" target="_blank"><i className="fa fa-facebook-square text-2xl" aria-hidden="true"></i> hamza mouddakir</a></li>
         <li className="py-2 text-amber-500 hover:scale-110"><a href="" target="_blank"><i className="fa fa-instagram text-2xl" aria-hidden="true"></i> @Hamzamr55 </a></li>
         <li className="py-2 text-green-600 hover:scale-110"><a href="tel:+212637613306" target="_blank"><i className="fa fa-whatsapp text-2xl" aria-hidden="true"></i> +212637613306 </a></li>
      </ul>
      <ul className="text-left">
         <li className="py-2 text-blue-400 hover:scale-110"><a href="https://www.linkedin.com/in/hamza-mouddakir-b4467a1b9/" target="_blank"><i className="fa fa-linkedin-square text-2xl" aria-hidden="true"></i>  Hamza Mouddakir</a></li>
         <li className="py-2 text-gray-400 hover:scale-110 "><a href="https://github.com/microappstech" target="_blank"><i className="fa fa-github-square text-2xl" aria-hidden="true"></i> Microappstech </a></li>
         <li className="py-2 text-black hover:scale-110"><a href="https://tech-miro.blogspot.com" target="_blank"><i className="fa fa-wordpress text-blue-700 text-2xl "aria-hidden="true"></i> www.tech-miro.com </a></li>
      </ul>
   </span>
   <span className="text-gray-400 pb-5 font-light"> <i className="fa fa-copyright" aria-hidden="true"> Copyright 2022 Hamza Mouddakir</i></span>
</footer>
     );
}

export default Footer;