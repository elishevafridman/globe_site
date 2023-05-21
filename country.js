export default class CountryClass{
    constructor(_parent,_item,shortToFullCountry,createCoutry,getCountryByCode){
        this.parent=_parent
        this.name=_item.name.common;
        this.borders=_item.borders
        this.languages=_item.languages?Object.values(_item.languages).join():none
        this.flag=_item.flags.png
        this.pop=_item.population
         this.lat=_item.latlng [0]
      this.lon=_item.latlng[1]  
    this.countryCode=_item.cca3
    this.capital=_item.capital
    this.region=_item.region
    this.shortToFullCountry=shortToFullCountry
    this.createCoutry=createCoutry
    this.getCountryByCode=getCountryByCode
    this.coin=_item.coins
 }
  formatNumber() {
    var suffixes = ["", "k", "M", "B", "T"];
    var suffixNum = 0;
    while (this.pop >= 1000 && suffixNum < suffixes.length - 1) {
      suffixNum++;
      this.pop /= 1000;
    }
    return this.pop.toFixed(1) + suffixes[suffixNum];
  }
  

  
  render(){
      let div = document.createElement("div");
      div.className = "col-md-8 mx-auto p-4 border shadow overflow-hidden";
      div.style = "background:rgba(163, 89, 44,0.5)"
      document.querySelector(this.parent).append(div);

      div.innerHTML = `
      <img src="${this.flag}" alt="${this.name}" class="w-50 float-end ms-4">
      <h2>${this.name}</h2>
      <div>POP: ${this.formatNumber()} </div>
      <div>Region: ${this.region}</div>
      <div>Capital: ${this.capital}</div>
      <div>Languages: ${this.languages}</div>
      <div class="mt-3 "><strong>States with borders:</strong><br>
      <div class="borders_div" ></div>
      </div>
      
      <iframe class="mt-4 col-12" height="400" src="https://maps.google.com/maps?q=${this.lat},${this.lon}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
     `
     if(this.borders){
      let borders_div=document.querySelector(".borders_div")
      borders_div.className="row "
    this.borders.forEach(async  element=> {
      if(element.toLowerCase()!="pse"){
        let a=document.createElement("a")
      a.className=" col-auto bord my-2 "
      let x= await this.shortToFullCountry(element)
      a.innerHTML=`${x} `
      borders_div.append(a)
      a.addEventListener("click",()=>{
      this.getCountryByCode(element.toString())}) }
   
    });}
  }

    //  let borders_div=document.querySelector(".borders_div")
    //  this.getBorderFullName().forEach(item=>{
    //   console.log(item)
    //   let a=document.createElement("a")
    //   a.className="bord"
    //   a.innerHTML=` ${item}`
    //   borders_div.append(a)
    //   borders_div.querySelector(".bord").addEventListener("click",()=>
    //   {this.createCoutry(item)}
    //   )
    //  })
    
  
  startRender(){
    let myDiv = document.createElement("div");
    document.querySelector(this.parent).append(myDiv);

    myDiv.className = "  col-md-6 col-lg-4 mt-3"
    myDiv.title = this.name;
    myDiv.innerHTML = `
        <div class="m-2 box col-11 border border-2 shadow text-light   text-center">
        <img src="${this.flag}" alt="${this.name}" title="${this.name}" class="my-2 mx-auto col-11" height="200" width="170" >
        <h2>${this.name}</h2>
        <div class="information">
        <p>population: ${this.formatNumber()}</p>
        </div>
        <button class="btn btn-light badge p-3 my-2  text-black">Press for more info</button>
        </div>
    `
     myDiv.querySelector(".btn").addEventListener("click", () => {
      document.querySelector(this.parent).innerHTML=""
         this.render();
    })
  }
}
