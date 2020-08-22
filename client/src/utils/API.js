import axios from "axios";

export default {
    createNewUser: function(User) {
        console.log("In the API: ", User);
        return axios.post("/api/signup", User);
    },
    login: function(User) {
        console.log("In the client side API, logging in user: ", User)
        return axios.post("/api/login/", User )
    },
    extract: function(image){
        return axios.post("/api/extract",image);
    },
    extractUrl: function(imageUrl) {
        return axios.post("/api/extractUrl", {imageUrl:imageUrl});
    },
    logout: function() {
        return axios.get("/api/logout");
    }
};
