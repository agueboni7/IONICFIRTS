import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

public authenticated: boolean;
private token: string;
  constructor() { }

  onAuth(user: string, password: string){
    if(user==='admin' && password ==='123'){
      this.authenticated=true;
      this.saveToken();
    }else{
      this.authenticated=false;
    }
    return this.authenticated
  }
  saveToken(){
    this.token='authed';
    localStorage.setItem('autorise', this.token)
  }

  loadToken(){
   this.token=localStorage.getItem('autorise');
    if(this.token==='authed'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
    return this.authenticated;
  }
}
