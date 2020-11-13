import axios from "axios";

  const instance = axios.create({
    baseURL: 'http://localhost:5001/project-56cc5/us-central1/api'
});


export default instance;
