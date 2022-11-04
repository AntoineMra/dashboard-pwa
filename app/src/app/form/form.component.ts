import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sig } from '../admin/sig';
import { SigService } from '../admin/sig.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    sig: Observable<Sig> = new Observable;
    sigs$: Observable<Sig[]> = new Observable;
    form: FormGroup = this.formBuilder.group({
    name: [],
    description: [],
    range: [],
    communicationRange: [],
    message: [],
    long: [],
    lat: [],
  })

  constructor(private formBuilder: FormBuilder, private sigService: SigService, private router:Router) { }

  ngOnInit(): void {
  }

  
  addSigs() {
    
    this.sig = this.sigService.postSig(this.form.value)
    this.getSigs()
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/admin']));  
  }

    getSigs() {
      this.sigs$ = this.sigService.getSigs()
    }

}
