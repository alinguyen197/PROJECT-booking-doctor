import axios from "../axios";

let userService = {
  login(email, password) {
    return axios.post("/api/user/login", {
      email,
      password,
    });
  },
};

export default userService;
