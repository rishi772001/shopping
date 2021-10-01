import axios from "axios";
var PRODUCT_API_URL = "http://localhost:8080/products/";
var USER_API_URL = "http://localhost:8080/users/";
class UserService {
  getAllProducts(){
      return axios.get(PRODUCT_API_URL)
  }

  buy(userId, id, price){
    return axios.post(USER_API_URL + userId, {
      total: price,
      products: [
        id
      ],
    });
  }
}
export default new UserService();