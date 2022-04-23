import React from "react"

function Main()
{
    return(
    <div className="main w-full h-full p-16 pt-5 bg-gradient-to-b from-white to-slate-400" id="about">
      <h1 className="text-center text-4xl text-blue-900 font-bold about">About Me
         <span className="who">Who Is Me?</span>
      </h1>
      <div className="md:flex md:flex-row w-full h-full py-10 md:justify-around ">
         <img src={require("../images/IMG_20220211_122707-removebg-preview (2).png")} alt="" className=" mx-20 first-letter:md:ml-36"/>
         <p className=" text-gray-600 md:float-right p-10">
            <span className="text-2xl font-fredoka">Je suis Hamza, Et Je suis <span style={{color: "crimson"}}>Freelancer</span></span>
            hamza mouddakir étudiant de developpement informatique en institue spésialisé technologie appliquée l'air el jadida. Et je suis en train de chercher un stage de fin d'études (pfe) d'une durée 1 moins à partir de 14 mars 2022
            <button className="bg-blue-900 flex  px-10 py-3 mt-4 rounded-md  text-white hover:scale-105 transition-all">DOWNLOAD CV</button>
        </p>
      </div>
   </div>
    )
}
export default Main