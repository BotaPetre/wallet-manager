//api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }
    getMessage() {
        const asd = this.http.get<{message: string}>(
            'http://localhost:3000/api/message');
        debugger;
        return asd;
    }
}