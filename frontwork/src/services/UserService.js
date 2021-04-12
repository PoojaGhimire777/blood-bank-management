import axios from 'axios';
import { Component } from 'react';
class UserService extends Component {
    createDonorByUser(donor){
        return axios.post("http://localhost:8080/admin/createDonor",donor);

}
getAllStockByUser(){
    return axios.get("http://localhost:8080/stock/getAllStock");
 
   }
   bloodRequest(user){
    return axios.post("http://localhost:8080/request/createRequest",user);
   
   }
}
export default new UserService()