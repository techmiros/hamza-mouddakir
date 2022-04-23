function Certificate() {
    return ( 
    <div class="certificate w-full h-full bg-gradient-to-b from-slate-400 to-white pt-10" id="certificate">
        <h1 class="text-center relative text-2xl font-bold mb-20">
            My Certificates
            <span class="second">Certificates</span>
        </h1>
        <div class="mt-20 p-16 md:flex ">   
            <div class="cert1 bg-gray-300 rounded-md py-5 md:w-1/3 mb-20  h-full m-5">
                <img src={require("../images/html.png")} class="rounded-full flex w-56 m-auto hover:scale-110 hover:rounded-lg transition-all duration-300" alt=""/>
                <h1 class="text-gray-700 text-2xl text-center m-3">Html 5</h1>
                <p class="text-center">SQL/MYSQL partenariat avec Academy Code Shiar obtenu en 2022</p>
            </div>
            <div class="cert1 bg-gray-300 rounded-md py-5 md:w-1/3 mb-20  h-full m-5 ">
                <img src={require("../images/sql.PNG")} class="rounded-full flex w-56 m-auto hover:scale-110 hover:rounded-lg transition-all duration-300" alt="" />
                <h1 class="text-gray-700 text-2xl text-center m-3">Sql - Mysql</h1>
                <p class="text-center">Sql - MySql partenariat avec Academy Code Shiar en 2022</p>
            </div>
            <div class="cert1 bg-gray-300 rounded-md py-5 md:w-1/3 mb-20  h-full m-5 ">
                <img src={require("../images/certiword.png")} class="rounded-full flex w-56 m-auto hover:scale-110 hover:rounded-lg transition-all duration-300" alt="" />
                <h1 class="text-gray-700 text-2xl text-center m-3">Microsoft Word</h1>
                <p class="text-center">Microsoft Word 2016 à partenariat avec l'Institut spesialisé de technologies et applique de l'air el jadida et Microsoft</p>
            </div>
        </div>
   </div>
     );
}

export default Certificate;