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
    return this.httpClient.get('https://web-mobile-api-1629-2110.herokuapp.com/sig');
  }

  getOneSig(id :string | null): Observable<any> {
    if (id) {
      return this.httpClient.get('https://web-mobile-api-1629-2110.herokuapp.com/sig/' + id);
    }
    else{
      return new Observable<any>()
    }
  }

  postSig(body: Sig): Observable<any> {
      return this.httpClient.post('https://web-mobile-api-1629-2110.herokuapp.com/', body);
  }

  updateSig(id :string | null, body: Sig): Observable<any> {
    if (id) {
      return this.httpClient.put('https://web-mobile-api-1629-2110.herokuapp.com/sig/' + id, body);
    }
    else{
      return new Observable<any>()
    }
  }

  deleteSig(id :string | null): Observable<any> {
    if (id) {
      return this.httpClient.delete('https://web-mobile-api-1629-2110.herokuapp.com/sig/' + id);
    }
    else{
      return new Observable<any>()
    }
  }


}
