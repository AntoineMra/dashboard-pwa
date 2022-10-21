import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Sig } from '../admin/sig';
import { SigService } from '../admin/sig.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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

  constructor(private formBuilder: FormBuilder, private sigService: SigService) { }

  ngOnInit(): void {
  }

  
  addSigs() {
    this.sigs$ = this.sigService.postSig(this.form.value)
  }

}
