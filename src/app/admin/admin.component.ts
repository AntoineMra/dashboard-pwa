import { formatDate } from '@angular/common';
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
  now: string = formatDate(new Date(), 'mm/dd/yy','en-US')

  constructor(private router:Router, private sigService: SigService) { }

  ngOnInit(): void {
    this.getSigs()
  }
  
  getSigs() {
    this.sigs$ = this.sigService.getSigs()
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
