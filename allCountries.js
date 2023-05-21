import CountryClass from "./country.js";
let allcountries_ar=[]
const startCountries=["israel","united states","france","united kingdom","thailand"]

export const fillSelectBox=()=>{
    let s=document.querySelector("#id_select")
    allcountries_ar.forEach((item)=>{
       s.innerHTML+=`<option value="${item.cca3}" class="sel"> ${item.name.common} </option>`
       
        

    })
}
export const shortToFullCountry = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data = await resp.json();
    let fullCountry = await (data[0].name.common);
    return fullCountry;
}

export const createCoutry=(_search)=>{
    document.querySelector("#id_parent").innerHTML=""
    let arr=allcountries_ar.filter(item=>item.name.common.toLowerCase().includes(_search.toLowerCase()))
    if(arr.length>0){
arr.forEach(item => {
    let country=new CountryClass("#id_parent",item,shortToFullCountry,createCoutry,getCountryByCode)
    console.log(country.countryCode)
    country.startRender();
   
});
}
else{
    getCountryByCode(_search)
 document.querySelector("#id_parent").innerHTML=`<h2>${_search} is not found</h2>`
}
 if(arr[0]!=null){return arr[0].name.common}}

export const getCountries=(_data)=>{
allcountries_ar=_data;
console.log(allcountries_ar)

}

export const  getCountryByCode=async(code)=>{
    document.querySelector("#id_parent").innerHTML=""
    if(code==""||code==" "){
        document.querySelector("#id_parent").innerHTML=`<h2><strong>please enter some for search</strong></h2>`

    }
    else{
        console.log(allcountries_ar[0].cca3)
        let arr=allcountries_ar.filter(item=>item.cca3.toLowerCase().includes(code.toLowerCase()))
        if(arr.length>0){
            arr.forEach(item=>{
                let country=new CountryClass("#id_parent",item,shortToFullCountry,createCoutry,getCountryByCode)
                country.render()
            })
        }
        else{
            document.querySelector("#id_parent").className="text-center"
            document.querySelector("#id_parent").innerHTML=`<h2><strong>We didnt found results for ${code}</strong></h2>`
        }

    }

}

export const startDisplayCountries=()=>{
    hideLoading()
    let s_countries=[]
    s_countries=allcountries_ar.filter((item)=>startCountries.includes(item.name.common.toLowerCase()))
    console.log(s_countries)
    s_countries.forEach(item=>
        {let country=new CountryClass("#id_parent",item,shortToFullCountry,createCoutry,getCountryByCode)
        console.log(country.borders)

    country.startRender()})

}
export const showLoading = () => {
    document.querySelector("#id_loading").style.display = "block";
    document.querySelector("#id_parent").style.display = "none";
}
export const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_parent").style.display = "flex";
  }