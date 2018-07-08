import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    // public headers = new HttpHeaders().set('Content-Type', 'application/json');
    //hecha@qwerty

    public url = 'http://data.fixer.io/api/latest?access_key=cdb9c5c98af1459593e382c877ca7ae1&base=EUR&symbols=USD,INR,EUR';

    constructor(
        private _http: Http
    ) { }


    getConversionRate(): Observable<any> {
        return this._http.get(this.url)
        .map(res => res.json());
    }

}