import axios from "axios"

const TOKEN = "cesbm5iad3i2r4r9sgj0cesbm5iad3i2r4r9sgjg"
console.log("finnHub did load")
//finhub.com dan gelen API KEY // bknz(parola)


export default  axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})

//https://finnhub.io/dashboard sitesinde data import etmemize
// olanak saglar, ki o da stock brand prices
// her bir stock request yaptigimizda butun line i yazmaya gerek yok
// istedigimiz stock u https nin arkasina eklememiz yeterli 
// finnHub.get("/quote", { } gibi 
