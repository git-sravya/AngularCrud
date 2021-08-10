import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class simpleCrudService {
  private apiServer = "http://localhost:62669/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/products/', this.httpOptions)
    
  }   
  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
   
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/')
  }

  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
    
  }

  delete(id){
    return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
    
  }
 
}
