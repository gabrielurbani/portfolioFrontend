import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../class/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //backend
  private baseUrl = "http://192.168.0.211:8080/experiencia";
  constructor (private httpClient : HttpClient) { }

  obtenerListaExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`${this.baseUrl}`)
  }
  
}
