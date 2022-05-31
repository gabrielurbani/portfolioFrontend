import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from 'src/environments/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //backend
  //private baseUrl = "https://agile-citadel-97429.herokuapp.com/experiencia";
  baseUrl = "http://192.168.0.211:8080/experiencia";

  constructor(private http: HttpClient) { }

  obtenerListaExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.baseUrl)
  }

  saveExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.baseUrl, experiencia);
  }
  editarExperiencia(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, experiencia);
  }

  obtenerExperienciaPorId(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.baseUrl + "/" + id);
  }

  eliminarExperiencia(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

}
