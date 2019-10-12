import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }
  
  postDataLara(body, type) {
    let apiUrl = environment.laravel.baseUrl + environment.laravel.api;
    type = (type == 'otp1' ? 'requestOtp' : (type == 'otp2' ? 'verifyOtp' : type));
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');

      console.log(apiUrl + type);

      this.http.post(apiUrl + type, JSON.stringify(body), { headers: headers }).
        subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  

}
