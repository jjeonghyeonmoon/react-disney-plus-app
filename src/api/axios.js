import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "0becbdb23917c38b21e82cb55c7d4362",
        language: "ko-KR"
    }
})

export default instance;