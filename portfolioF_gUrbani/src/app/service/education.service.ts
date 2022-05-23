import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../class/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  //backend
  private baseUrl = "https://agile-citadel-97429.herokuapp.com:8080/education";
  constructor(private httpClient: HttpClient) { }

  obtenerListaEducation(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(`${this.baseUrl}`)
  }

}
