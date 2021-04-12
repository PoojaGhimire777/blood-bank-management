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

     searchDonor(Location,bloodGroup){
      var url = "";
      if(Location === "" && bloodGroup !== ""){
       url = "http://localhost:8080/admin/searchDonor?bloodgroup="+ bloodGroup;
      }
      else if(Location !== "" && bloodGroup === ""){
       url = "http://localhost:8080/admin/searchDonor?location="+ Location;

      }
      else if(Location !== "" && bloodGroup !== ""){
       url = "http://localhost:8080/admin/searchDonor?location="+ Location +"&bloodgroup="+bloodGroup;
      }
      console.log(url);
    return axios.get(url) ;
}
getAllStock(){
   return axios.get("http://localhost:8080/stock/getAllStock");

  }

  increaseStock(units,bloodGroup){
   return axios.put("http://localhost:8080/stock/increaseStock?units="+units+"&bloodgroup="+bloodGroup) ;

  }

  decreaseStock(units,bloodGroup){
   return axios.put("http://localhost:8080/stock/decreaseStock?units="+units+"&bloodgroup="+bloodGroup);

}
showRequest(){
   return axios.get("http://localhost:8080/request/getPendingRequests");

  }
  deleteRequest(id){
   return axios.delete("http://localhost:8080/request/deleteRequest?id="+id);

}
updateBloodRequest(userRequest,id){
   return axios.put("http://localhost:8080/request/updateBloodRequest?id="+id,userRequest);
}

}

export default new AdminService()