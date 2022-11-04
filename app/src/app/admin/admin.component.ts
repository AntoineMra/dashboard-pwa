import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { User } from '../auth/user';
import { UserService } from '../auth/user.service';
import { Sig } from './sig';
import { SigService } from './sig.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sigs$: Observable<Sig[]> = new Observable;
  user$: Observable<User[]> = new Observable;
  loggedRole: string | null = '';
  now: string = formatDate(new Date(), 'dd/yyyy', 'en-GB')

  constructor(private router:Router, private sigService: SigService, private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getSigs()
    this.getUsers()
    this.getLoggedRole()
  }
  
  getSigs() {
    this.sigs$ = this.sigService.getSigs()
  }

  getUsers() {
    this.user$ = this.userService.getUsers()
  }

  getLoggedRole(){
    this.loggedRole = this.tokenStorageService.getToken();
  }

  logOut(){
    this.loggedRole = '';
    this.tokenStorageService.disconnect();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/admin']));
  }

  updateSigs(payload: Sig, iri: string) {
    this.sigs$ = this.sigService.updateSig(iri, payload)
  }

  deleteSigs(sig: Sig) {
    console.log(sig);
    
    this.sigs$ = this.sigService.deleteSig(sig.id)
  }

  redirectForm() {
    this.router.navigate(['/form'])
  }

}
