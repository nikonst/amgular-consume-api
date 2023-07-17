import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string  = "https://randomuser.me/api/"

  constructor(private http: HttpClient) { }

  //Fetch users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`)
  }

  //Fetch one user by id
  getUser(uuid: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`)
  }

}
