import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:boolean = false;

  form: FormGroup = this.formBuilder.group({
    role: [''],
  })

  constructor(private userService: UserService,
    private tokenService: TokenStorageService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.tokenService.setToken(this.form.value['role'])
    if (this.tokenService.isAuthenticate()) {
      this.router.navigateByUrl('/') 
    }
  }
}
