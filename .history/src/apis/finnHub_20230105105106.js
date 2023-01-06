import axios from "axios";

const KEY= "ceqb67aad3i9f7a4r450ceqb67aad3i9f7a4r45g"
//


export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params  :{
        token:KEY
    } 
})
//https://finnhub.io/dashboard sitesinde data import etmemize
// olanak saglar, ki o da stock brand prices
// her bir stock request yaptigimizda butun line i yazmaya gerek yok
// istedigimiz stock u https nin arkasina eklememiz yeterli 
// finnHub.get("/quote", { } gibi 
