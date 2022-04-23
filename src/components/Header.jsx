import React from "react";
import {    BrowserRouter} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
  

function Header(){
    function dark(){
        if(document.querySelector(".chekbox").checked){
           document.getElementById('menu').style.display = 'block';
        }
        else{
           document.getElementById('menu').style.display = 'none';
        }
     }
    return(
        <>
        <header className="container mx-auto">
        <nav className="m-5 justify-around">
            <span className="text-blue-900 font-fredoka text-lg font-bold"><a href="/"><i className="fa fa-code" aria-hidden="true"></i> HAMZA MR</a></span>
            <label htmlFor="dark">
                <i className="toggle fa fa-bars md:hidden text-2xl text-gray-600 self-items float-right cursor-pointer"></i>
            </label>
            <input type="checkbox"  className="chekbox md:hidden"onChange={dark} id="dark"/>
            <ul id="menu" className="hidden text-white text-center w-1/1 justify-center space-x-5 md:flex md:text-blue-800  md:float-right md:auto">
            <BrowserRouter>
                <Link to="#about"><li className="p-2 cursor-pointer hover:scale-110 hover:text-blue-900">About</li></Link>
                <Link to="#certificate"><li className="p-2 cursor-pointer hover:scale-110 hover:text-blue-900">Certificates</li></Link>
                <Link to="#technologie"><li className="p-2 cursor-pointer hover:scale-110 hover:text-blue-900 ">Technologie</li></Link>
                <Link to="#projects"><li className="p-2 cursor-pointer hover:scale-110 hover:text-blue-900 ">Projects</li></Link>
                <Link to="#skills"><li className="p-2 cursor-pointer hover:scale-110 hover:text-blue-900 ">Skills</li></Link>
                <Link to="#services"><li className="p-2 cursor-pointer hover:scale-110 hover:text-blue-900 ">Services</li></Link>
                <Link to="#contact"><li> <button className="invisible m-2 md:visible bg-blue-900 px-3 pb-1 hidden sm:block rounded-md text-white">Contact</button></li></Link>
                <li> <span><i className="fa fa-moon-o m-3 cursor-pointer hover:bg-gray-500 hover:scale-150 rounded-sm p-3" aria-hidden="true"></i></span></li>
            </BrowserRouter>

            </ul>
        </nav>
        
        <div className="landing rounded-md  m-8 md:flex md:w-full h-full ">
            
            <img src={require('../images/IMG_20220211_122241-removebg-preview.png')} alt="" className="mt-10 m-auto w-full rounded-md md:float-right"/>
            <div className="md:float-left ">
                <h2 className="text-gray-600 pl-20 pt-10 font-semibold text-5xl">Hamza Mouddakir </h2>
                <h1 className="pl-20 text-orange-700 font-semibold text-3xl">Developper Full Stack</h1>
                <p className="p-10 ml-10 text-gray-600 font-extralight">Hamza Mouddakir, Et Je suis Freelancer et étudiant de developpement informatique en institue spésialisé technologie appliquée l'air el jadida. Et je maitrisé plusieur technologie : Javascript avec frame work <span className="text-orange-600 fo -semibold text-xl ">ReactJs, NodeJs</span> et Html and Css avec framework <span className="text-orange-600 font-light text-xl"> sass, bootstrap , Tailwind</span> avec technolofie et la langue C# avec framework <span className="text-orange-600 font-light text-xl">Winforms .net , Asp.net </span> et en base de données <span className="text-orange-600 font-light text-xl">Sql server , Mongodb</span> et des autres langues de programations </p>
                <button className="bg-blue-900 text-gray-100 p-1 px-10 text-xl rounded-md ml-20 hover:scale-110"><a href="https://www.linkedin.com/in/hamza-mouddakir-b4467a1b9/" target="_blank"> Get More </a></button>
            </div>
        </div>
        <div className="circle"></div>
        <div className="nudget"></div>
   
        </header>
    </>
    )
}
export default Header
