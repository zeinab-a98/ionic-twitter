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
      //headers.set('authorization', 'application/json');
//"authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3dvcmRwcmVzcyIsImlhdCI6MTU2ODkxNzg4MywibmJmIjoxNTY4OTE3ODgzLCJleHAiOjE1Njk1MjI2ODMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.oL1f6xXrPta21ukO6MrQpC835r7x_76I6pmmhgbgmpU",
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