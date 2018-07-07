import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    // public headers = new HttpHeaders().set('Content-Type', 'application/json');

    public url = 'http://data.fixer.io/api/latest?access_key=c508f1138f8337c54bb7f315f4fbd02f&base=EUR&symbols=USD,INR,EUR';

    // accessKey='cdb9c5c98af1459593e382c877ca7ae1'

    constructor(
        private _http: Http
    ) { }


    getConversionRate(): Observable<any> {
        return this._http.get(this.url)
        .map(res => res.json());
    }

}