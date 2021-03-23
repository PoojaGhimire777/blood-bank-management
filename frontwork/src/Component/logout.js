import React, { Component } from 'react'
//import { baseUrl } from '../assets/js/helpers';

export default class logout extends Component {

  logout = () => {
    window.localStorage.clear();
    //window.location.href = baseUrl + "login";
  }
  
  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}