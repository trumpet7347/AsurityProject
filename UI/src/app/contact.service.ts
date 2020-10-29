import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get('https://localhost:44359/api/contacts');
  }

  getContact(id: number){
    return this.http.get(`https://localhost:44359/api/contacts/${id}`);
  }

  getStates(){
    return this.http.get('https://localhost:44359/api/states');
  }

  getContactFreq(){
    return this.http.get('https://localhost:44359/api/ContactFrequencies');
  }

  getContactMethod(){
    return this.http.get('https://localhost:44359/api/ContactMethods');
  }
}
