import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: '6f3e4aeefc7e454980da18c192a42a77'
    }
})