import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(httpRequest: HttpRequest<unknown>, httpHandler: HttpHandler): Observable<HttpEvent<unknown>> {

    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/user/login`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/user/register`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/user/reset-password`)) {
      return httpHandler.handle(httpRequest);
    }

    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/shelter/all`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/shelter/details`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/shelter/pets`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/shelter/takers`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/pet/all`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/pet/all/shelter`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/pet/details`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/taker/all`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/taker/pets`)) {
      return httpHandler.handle(httpRequest);
    }
    if (httpRequest.url.includes(`${this.authenticationService.baseUrl}/taker/details`)) {
      return httpHandler.handle(httpRequest);
    }


    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    const request = httpRequest.clone({setHeaders: {Authorization: `Bearer ${token}`}})
    return httpHandler.handle(request);
  }
}
