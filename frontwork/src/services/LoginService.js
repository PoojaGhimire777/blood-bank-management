import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/";

class LoginService {

    

    adminLogin(username,password,role){
       // adminLogin(){
        return axios.get("http://localhost:8080/user/authenticate?username="+username+"&role=" +role+"&password="+password);
     

        //return axios.get("http://localhost:8080/admin/getAllDonor");
    }
  
}

export default new LoginService()