import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/environments/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  //backend
  //private baseUrl = "https://agile-citadel-97429.herokuapp.com/education";
  private baseUrl = "http://192.168.0.211:8080/education";

  constructor(private http: HttpClient) { }

  obtenerListaEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl)
  }

  saveEducation(education: Education): Observable<any> {
    return this.http.post<any>(this.baseUrl, education);
  }
  editarEducation(id: number, education: Education): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, education);
  }

  obtenerEducationPorId(id: number): Observable<Education> {
    return this.http.get<Education>(this.baseUrl + "/" + id);
  }

  eliminarEducation(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "/" + id);
  }




}
