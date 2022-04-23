import React from 'react';





function resultFun() {
    const close = ()=>{
        
            // document.querySelector(".contact").style = display.
            document.querySelector('.contact').style.display = 'none';
    
        }
    
    return ( 
        <div className="contact w-1/2 h-full border-[1px] bg-green-100 border-green-500 inline-flex relative align-middle">
            <div className="icon">
                <img src={require('../images/success.png')} className="h-8 pt-2 " alt="" />
            </div>
            <div className="text pt-1 mx-10">
                <p>Seccuss : Your Message Sent Successfully</p>
            </div>
            <div className="close absolute right-0 text-center pt-2 bg-slate-300 h-full text-green-900 w-10 hover:scale-105 cursor-pointer" onClick={close}>X</div>
        </div>
     );



    }
    

export default resultFun;