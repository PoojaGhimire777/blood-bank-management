import axios from 'axios';
const DONOR_API_BASE_URL = "http://localhost:8080/user";
class donorservice {

authenticateuser(username, password, role){
    return axios.get(DONOR_API_BASE_URL + '/' + username, password, role);
}
}
export default new donorservice()