import { Injectable } from '@angular/core';
import { About } from 'src/environments/about';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
 url: string = "https://agile-citadel-97429.herokuapp.com/about";
 // url:string="http://192.168.0.211:8080/about";
  constructor(private http: HttpClient) { }
  obtenerDatosAbout(id: number): Observable<About> {
    return this.http.get<About>(this.url + "/" + id);
  }
  editarDatosAbout(about: About): Observable<any> {
    return this.http.put(this.url, about)
  }

}
