import axios from "axios";

const JOMinstance = axios.create({
  // baseURL: "http://13.233.60.62/",
  baseURL: "http://192.168.18.79:8081/",
});

export default JOMinstance;
