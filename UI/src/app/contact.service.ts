import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contact } from './contact.model'
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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

  updateContact(data: Contact){
    return this.http.put('https://localhost:44359/api/contacts', data);
  }

  deleteContact(id: number){
    return this.http.delete(`https://localhost:44359/api/contacts/${id}`)
  }

  addContact(data: Contact){
    return this.http.post(`https://localhost:44359/api/contacts`, data)
  }
}

