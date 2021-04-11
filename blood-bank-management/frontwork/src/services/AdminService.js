import axios from 'axios';
import { Component } from 'react';

class AdminService extends Component {

    
    getallDonor(){
                return axios.get("http://localhost:8080/admin/getAllDonor");
    }

    getDonorById(id){
              return axios.get("http://localhost:8080/admin/getDonorById?id="+id) ;
 }
    createDonor(donor){
                return axios.post("http://localhost:8080/admin/createDonor",donor);

}
     deleteDonor(id){
                return axios.delete("http://localhost:8080/admin/deleteDonor?id="+id);

}
     updateDonor(donor,id){
        return axios.put("http://localhost:8080/admin/updateDonor?id="+id,donor);
     }
}

export default new AdminService()