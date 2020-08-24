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
    },
    searchStore: function(lattitude,longitude,kw){
        //find places nearby
    let radius = "radius=5000";
    let type = "type=store";
    let keyword = `keyword=${kw}`;
    let apiKey = `key=${process.env.GOOGLE_MAP_API_KEY}`;
        return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lattitude},${longitude}&${radius}&${type}&${keyword}&${apiKey}`);
    },
    searchForFriend: function(searchTerm) {

        return axios.post("/api/searchforfriend", searchTerm);
    }
};
