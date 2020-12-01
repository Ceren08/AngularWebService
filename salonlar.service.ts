import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { salonlar } from '../models/salonlar.model';


@Injectable({
  providedIn: 'root'
})
export class SalonlarService {

  private apiUrl = 'http://localhost:8080/cinema/rest/salonList';  

  constructor(private _http: HttpClient){}  
  getSalonlar(){
    return this._http.get<salonlar[]>(this.apiUrl);
  }
 }
 
/*
  public getByName(username:string){
  console.log(`${this.apiUrl}list/by/${username}`);
  return this.http.get<Scity[]>(`${this.apiUrl}/list/by/${username}`);
  }


// UPDATE  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  updateCity (id, product): Observable<any> {
    return this.http.put(this.apiUrl  + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated city id=${id}`))
      
    );
  }
  
  extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getCity(id): Observable<any> {
    return this.http.get(this.apiUrl  + id).pipe(
      map(this.extractData));
  }

  //DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }  
*/



