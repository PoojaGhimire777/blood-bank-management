import axios from 'axios';
import { Component } from 'react';

class LoginService extends Component {


    adminLogin(username,password,role){
       
        return axios.get("http://localhost:8080/user/authenticate?username="+username+"&role=" +role+"&password="+password);
    }

    createUser(user){
        return axios.post("http://localhost:8080/user/createUser",user);
    }
}


export default new LoginService()