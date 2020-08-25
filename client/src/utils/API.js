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
    getFriends: function(User) {
        if (User && User.id) {
            // This is a post request - so we can pass the user id -- but it should probably
            // be passed on the url as a get request instead /api/getfriends/:id   (for example)
        return axios.post("/api/getfriends", {User:User.id});
        } else {
            // this is still calling the get friends route even though
            // the user is not logged in.
            // This would be better to return an empty promise.
            return axios.post("/api/getfriends", null);
        }
    },
    searchForFriend: function(searchTerm) {
        console.log("About to post using axios to search for a friend, searchTerm: ", searchTerm);
        return axios.post("/api/searchforfriend", {searchTerm: searchTerm});
    },
    addFriend: function( {User, Friend}) {
        let connection = {User:User.id, Friend: Friend.id}
        console.log("Sending a post request to add a friend: ", connection);
        return axios.post("/api/addfriend", connection);
    }
};
