import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/environments/experiencia';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencias:Experiencia[];

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
   this.obtenerExperiencia();
  }
  private obtenerExperiencia(){
    this.experienciaService.obtenerListaExperiencia().subscribe(exp =>{
      this.experiencias = exp;
    })
  }
}
