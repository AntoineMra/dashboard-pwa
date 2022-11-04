import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercepted');
    

    if (this.tokenStorageService.hasToken()) {
      let head = request.headers
      head = request.headers.set('Authorization', 'Bearer ' + this.tokenStorageService.getToken())      
      request.clone({headers: head})
    }
    console.log(request);
    
    return next.handle(request);
  }
}
