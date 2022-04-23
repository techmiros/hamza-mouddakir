import React from "react"
function Service(){
    return(
    <div class="srvices w-full h-full pt-10 bg-gradient-to-b from-slate-400 to-white" id="services">
        <h1 class="text-center text-4xl text-white font-bold about ">My services
           <span class="who">my Services</span>
        </h1>
  
        <div class="mt-20 p-16 md:flex">
           <div class="card1 md:w-1/3 mb-20 bg-black h-full m-5 hover:scale-110">
              <img src={require("../images/desktop.png")} class=" " alt=""/>
              <ul class="flex w-full justify-around text-white h-10 bg-slate-400 p-2">
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-share" aria-hidden="true"> Share</i></li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-chevron-circle-down" aria-hidden="true"> More</i></li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-thumbs-up" aria-hidden="true"> Like</i></li>
              </ul>
           </div>
           <div class="card2  md:w-1/3 m-5 mb-20 bg-black h-full hover:scale-110">
              <img src={require("../images/sushi-market-235438.webp")} class="" alt="" />
              <ul class="flex w-full justify-around text-white h-10 bg-slate-400 p-2">
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-share" aria-hidden="true"> Share</i></li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-chevron-circle-down" aria-hidden="true"> More</i></li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-thumbs-up" aria-hidden="true"> Like</i></li>
              </ul>
           </div>
           <div class="card3 md:w-1/3 m-5 mb-20 bg-black h-full hover:scale-110">
              <img src={require("../images/siteweb.png")} class=" " alt="" />
              <ul class="flex w-full justify-around text-white h-10 bg-slate-400 p-2">
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-share" aria-hidden="true"> Share</i>
                 </li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-chevron-circle-down" aria-hidden="true"> More</i>
                 </li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800"><i class="fa fa-thumbs-up" aria-hidden="true"> Like</i></li>
              </ul>
           </div>
           
         </div>

        {/* <div class="mt-0 px-16 md:flex">
           <div class="card1 md:w-1/3 mb-20 bg-black h-full m-5">
              <img src="https://via.placeholder.com/300/000000" class=" " alt="" />
              <ul class="flex w-full justify-around text-white h-10 bg-slate-400 p-2">
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">Share</li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">More</li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">Like</li>
              </ul>
           </div>
           <div class="card2  md:w-1/3 m-5 mb-20 bg-black h-full">
              <img src="https://via.placeholder.com/300/000000" class="" alt="" />
              <ul class="flex w-full justify-around text-white h-10 bg-slate-400 p-2">
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">Share</li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">More</li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">Like</li>
              </ul>
           </div>
           <div class="card3 md:w-1/3 m-5 mb-20 bg-black h-full">
              <img src="https://via.placeholder.com/300/000000" class=" " alt="" />
              <ul class="flex w-full justify-around text-white h-10 bg-slate-400 p-2">
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">Share</li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">More</li>
                 <li class="cursor-pointer hover:scale-125 hover:text-blue-800">Like</li>
              </ul>
           </div>
        </div> */}
     </div>
    )
}

export default Service