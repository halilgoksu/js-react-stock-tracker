import axios from "axios"

const TOKEN = "ceqb67aad3i9f7a4r46g"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})