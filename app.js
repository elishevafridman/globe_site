import { declareEvent } from "./declareEvents.js"
import { getCountries,startDisplayCountries,fillSelectBox,showLoading } from "./allCountries.js"
const init=()=>{
doApi()
declareEvent()
}

const doApi=async()=>{
    showLoading()
    let url="https://restcountries.com/v3.1/all"
    let resp=await fetch(url)
    let data=await resp.json()
    data=data.filter(item=>item.name.common!="palastine")
    console.log(data)
      getCountries(data)
     startDisplayCountries()
      fillSelectBox()

}
// export const fillSelectBox=()=>{
//     allcountries_ar.forEach(item=>{
//         let option=document.createElement("option")
//         document.querySelector("#id_select").append(option)
//         option.value=item.name.common

//     })
// }
init()