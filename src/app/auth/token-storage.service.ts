import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorageService {

  constructor() { }

  public getToken() : string | null {
    return localStorage.getItem('role');
  }

  
  public setToken(role : string) {
    localStorage.setItem('role', role);
  }

  public deleteToken(): void{
   localStorage.removeItem('role')
 }  

 public hasToken(): boolean {
    if (localStorage.getItem('role') && localStorage.getItem('role')?.length) {
      return true
    }

    return false;
 }
 public isAuthenticate(): boolean {
    if (this.hasToken()) {
      return true // login to implement
    }
    return false
  }
  public disconnect() {
    this.deleteToken();
  }
}
