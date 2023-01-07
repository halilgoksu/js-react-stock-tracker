import axios from "axios"

const TOKEN = "cesbm5iad3i2r4r9sgj0cesbm5iad3i2r4r9sgjg"
console.log("finnHub did load")

export default  axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})