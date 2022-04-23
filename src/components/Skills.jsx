function Skill(){
    return(
        <div className="skills w-full p20 py-20 bg-gradient-to-b from-white to-slate-400 sc" id="skills">
        <h1 className="text-center text-4xl text-blue-900 font-bold about ">My Skills
           <span className="who ">my Skills</span>
        </h1>
        <div className="flex flex-col md:flex-row mx-20">
           <div className="hidden md:flex md:flex-col md:visible sociaux w-1/3 mt-20">
              <h1 className="text-xl text-blue-700 text-center mt-16">My Contact Social</h1>
              <ul className=" flex flex-col pt-10 w-full text-2xl text-center">
                 <li className="">
                    <a href="https://www.linkedin.com/in/hamza-mouddakir-b4467a1b9/" target="_blank">
                       <span className=""><i className="cursor-pointer hover:scale-110 transition-all duration-700 hover:bg-slate-300 fa fa-linkedin py-5 text-blue-600   font-bold w-full" ></i></span>
                    </a>
                 </li>
                 <li>
                    <a href="https://github.com/microappstech" target="_blank">
                       <i className="fa fa-github hover:scale-110 transition-all duration-700 hover:bg-slate-300 cursor-pointer text-balck-600 py-5 justify-center font-bold w-full"></i>
                    </a>
                 </li>
                 <li>
                    <a href="https://web.facebook.com/hamza.modakur" target="_blank">
                       <i className="fa fa-facebook hover:scale-110 transition-all duration-700 hover:bg-slate-300 text-blue-600 py-5 cursor-pointer justify-end  font-bold w-full" ></i>
                    </a>
                 </li>
                 <li>
                    <a href="mailto:hamzamouddakur@gmail.com" target="_blank">
                       <i className="fa fa-envelope-o hover:scale-110 transition-all duration-700 hover:bg-slate-300 text-orange-600 font-light text-xl py-5 cursor-pointer font-bold w-full"></i>
                    </a>
              </li>
              </ul>
           </div>
           
           <div className="skill w-full md:w-2/3 md:ml-10 mt-20  py-5  px-10 font-poppins ">
              <h1 className=" pt-5 text-blue-700 text-center text-2xl">Skills</h1>
              <ul>
                 <li className="flex flex-col">
                    <span className="pr-16">Figma : <span className="float-right">90%</span> </span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="figma h-full bg-blue-400 transition-all duration-1000  rounded-md">
                       </div> 
                    </span>
                 </li>
                 <li className="flex flex-col mt-5">
                    <span className="pr-16">Html,Css, Tailwind, Bootstrap : <span className="float-right">80%</span> </span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="html h-full transition-all duration-1000 bg-blue-400  rounded-md">
                       </div> 
                    </span>
                 </li>
                 <li className="flex flex-col mt-5">
                    <span className="pr-16">Sql Server : <span className="float-right">75%</span> </span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="sql h-full bg-blue-400 transition-all duration-1000 rounded-md">
                       </div> 
                    </span>
                 </li>
                 <li className="flex flex-col mt-5">
                    <span className="pr-16">Android studio: <span className="float-right">70%</span></span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="anst h-full transition-all duration-1000 bg-blue-400  rounded-md">
                       </div> 
                    </span>
                 </li>
                 <li className="flex flex-col mt-5">
                    <span className="pr-16">Javascript React : <span className="float-right">70%</span></span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="js h-full transition-all duration-1000 bg-blue-400  rounded-md">
                       </div> 
                    </span>
                 </li>
                 <li className="flex flex-col mt-5">
                    <span className="pr-16">Ado.Net: <span className="float-right">70%</span></span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="ado h-full transition-all duration-1000 bg-blue-400  rounded-md">
                       </div> 
                    </span>
                 </li>
                 
                 <li className="flex flex-col mt-5">
                    <span className="pr-16">Asp.net: <span className="float-right">50%</span></span>
                    <span className="h-[15px]  bg-white w-11/12 mt-2 rounded-md ">
                       <div className="asp h-full bg-blue-400 transition-all duration-1000 rounded-md">
                       </div> 
                    </span>
                 </li>
              </ul>
           </div>
        </div>
     </div>
    )
}

export default Skill