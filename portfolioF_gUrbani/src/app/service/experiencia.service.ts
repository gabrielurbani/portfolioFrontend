import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from 'src/environments/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //backend
  private baseUrl = "https://agile-citadel-97429.herokuapp.com/experiencia";
  //private baseUrl = "http://192.168.0.211:8080/experiencia";

  constructor (private http : HttpClient) { }

  obtenerListaExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.baseUrl}`)
  }
  
  saveExperiencia(experiencia:Experiencia): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,experiencia);
  }
  
}
