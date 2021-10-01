import axios from "axios";
var USER_API_URL = "http://localhost:8080/users/";
class UserService {
  login(email, password) {
    return axios.post("http://localhost:8080/users/login", {
      email: email,
      password: password
    });
  }

  addUser(data) {
    return axios.post(USER_API_URL, data);
  }

  getAllPurchases(id){
    return axios.get(USER_API_URL + id);
  }
}
export default new UserService();