import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: User) {
    return this.httpClient.post('http://localhost:3000/auth/login', credentials)
  }
}
