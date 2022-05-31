import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from 'src/environments/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl: string = "https://agile-citadel-97429.herokuapp.com/projects";

  //baseUrl: string = "http://192.168.0.211:8080/projects";
  constructor(private http: HttpClient) { }

  obtenerListaProject(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.baseUrl)
  }

  saveProject(projects: Projects): Observable<any> {
    return this.http.post<any>(this.baseUrl, projects);
  }
  editarProject(id: number, projects: Projects): Observable<any> {
    return this.http.put(this.baseUrl + "/" + id, projects);
  }

  obtenerProjectPorId(id: number): Observable<Projects> {
    return this.http.get<Projects>(this.baseUrl + "/" + id);
  }

  eliminarProject(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + "/" + id);
  }



}
