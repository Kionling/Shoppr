import axios from "axios";

export default {
    createNewUser: function(User) {
        return axios.post("/api/signup", User);
    }

};
