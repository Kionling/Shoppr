import axios from "axios";

export default {
    createNewUser: function(User) {
        console.log("In the API: ", User);
        return axios.post("/api/signup", User);
    },
    login: function(User) {
        return axios.post("/api/login/", User )
    }
};
