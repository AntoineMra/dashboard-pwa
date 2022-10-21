import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sig } from './sig';
import { SigService } from './sig.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sigs$: Observable<Sig[]> = new Observable;

  constructor(private router:Router, private sigService: SigService) { }

  ngOnInit(): void {
  }
  
  getSigs() {
    this.sigs$ = this.sigService.getSigs()
  }

  addSigs(payload: Sig) {
    this.sigs$ = this.sigService.postSig(payload)
  }

  updateSigs(payload: Sig, iri: string) {
    this.sigs$ = this.sigService.updateSig(iri, payload)
  }

  deleteSigs(iri: string) {
    this.sigService.deleteSig(iri)
  }

}
