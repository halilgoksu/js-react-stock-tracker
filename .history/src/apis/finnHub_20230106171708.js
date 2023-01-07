import axios from "axios"

const TOKEN = "cesbav2ad3i2r4r9sbf0cesbav2ad3i2r4r9sbfg"
console.log("finnHub did load")

export default  axios.finnHub({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})