import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sig } from './sig';

@Injectable({
  providedIn: 'root'
})
export class SigService {

   constructor(private httpClient: HttpClient) { }
  getSigs(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/sig');
  }

  getOneSig(iri :string | null): Observable<any> {
    if (iri) {
      return this.httpClient.get('http://localhost:3000/' + iri);
    }
    else{
      return new Observable<any>()
    }
  }

  postSig(body: Sig): Observable<any> {
      return this.httpClient.post('http://localhost:3000/', body);
  }

  updateSig(iri :string | null, body: Sig): Observable<any> {
    if (iri) {
      return this.httpClient.put('http://localhost:3000/' + iri, body);
    }
    else{
      return new Observable<any>()
    }
  }

  deleteSig(iri :string | null): Observable<any> {
    if (iri) {
      return this.httpClient.delete('http://localhost:3000/' + iri);
    }
    else{
      return new Observable<any>()
    }
  }


}
