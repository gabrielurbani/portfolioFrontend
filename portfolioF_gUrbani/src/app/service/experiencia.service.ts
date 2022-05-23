import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../class/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //backend
  private baseUrl = "https://agile-citadel-97429.herokuapp.com:8080/experiencia";
  constructor (private httpClient : HttpClient) { }

  obtenerListaExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.baseUrl}`)
  }
  
  saveExperiencia(experiencia:Experiencia): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,experiencia);
  }
  
}
