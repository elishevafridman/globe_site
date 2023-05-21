import { getCountryByCode, createCoutry } from "./allCountries.js"

export const declareEvent=()=>{
    
    document.querySelector("#btn_Search").addEventListener("click",()=>{
    let x=document.querySelector("#id_input").value
    createCoutry(x)
    
    document.querySelector("#id_input").addEventListener("keydown",(e) => {
        let x=document.querySelector("#id_input").value
        if(e.key == "Enter"){
            createCoutry(x)
        }
    })
})


   document.querySelector("#id_usa").addEventListener("click",()=>{
    getCountryByCode("usa")
   })

   document.querySelector("#id_israel").addEventListener("click",()=>{
    getCountryByCode("isr")
   })

   document.querySelector("#id_gb").addEventListener("click",()=>{
    getCountryByCode("gbr")
   })

   document.querySelector("#id_france").addEventListener("click",()=>{
    getCountryByCode("fra")
   })

   document.querySelector("#id_thailand").addEventListener("click",()=>{
    getCountryByCode("tha")
   })
   document.querySelector("#id_select").addEventListener("change",()=>{
    let x=document.querySelector("#id_select").value
    if(x!="")
    getCountryByCode(x)
   })
}