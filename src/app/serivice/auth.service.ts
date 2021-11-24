import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'



const apikey = "coinranking9bce402e1b2826b7c8a69ad2996dce6e8d8c217517293875";

const headers = new HttpHeaders({

});
export class AuthService {

  private baseUrl = 'https://dftu77xade0tc.cloudfront.net/fargate-spot-prices.json?timestamp=1625130865034';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) {

  }
  getData() {
    //const url = `${this.proxyUrl}${this.baseUrl}`;

    return this.http.get("../../assets/json/TF1-2021-06-29.json");

  }

  getDatafromAWS() {
    const url = `${this.proxyUrl}${this.baseUrl}`;
    return this.http.get(url, { headers });
  }



  
}
