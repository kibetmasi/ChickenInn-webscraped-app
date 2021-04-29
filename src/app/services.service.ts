import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const endpoint = "http://localhost:4000/list"; //shoud be localhost

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  public getPost(){
    return this.http.get(endpoint);
  }

}
