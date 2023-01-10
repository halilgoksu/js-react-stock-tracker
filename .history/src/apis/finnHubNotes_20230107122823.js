import axios from "axios";

const TOKEN= "cesbav2ad3i2r4r9sbf0cesbav2ad3i2r4r9sbfg"
//finhub.com dan gelen API KEY // bknz(parola)


export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})





