import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from 'src/environments/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 //private url:string = "https://agile-citadel-97429.herokuapp.com:8080/projects";
 
  url:string="https://agile-citadel-97429.herokuapp.com/projects";
  constructor(private http:HttpClient) {
    console.log("Andando servicio");
       
  }
obtenerDatosProyecto(id:number):Observable<Projects>{
  return this.http.get<Projects>(this.url+"/"+id);
}
 editarDatosProyecto(projects:Projects):Observable<any>{
   return this.http.put(this.url,projects)
 }
  }
