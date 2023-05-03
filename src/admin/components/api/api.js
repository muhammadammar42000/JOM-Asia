import axios from "axios"
// import {token} from "./token"
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5ZGQwM2MzLTc5ZjQtNDFkNS05MzJlLWZkY2NkNGVhODk4YyIsImVtYWlsIjoib29wQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoib29wIiwiaWF0IjoxNjUzOTg3ODQ5LCJleHAiOjE2NTQ0MTk4NDl9.fvgidWV8joT60n04WOr8VAUIPKaMUi3DxL3JJtgbvsE`

const instance = axios.create({
    baseURL: "https://backend.johortourism.my/",
    headers: {
        Authorization:`Bearer ${token}`
    }
    // withCredentials: false
})

export default instance