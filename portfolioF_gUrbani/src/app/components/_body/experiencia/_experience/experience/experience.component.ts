import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/environments/experiencia';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia:Experiencia[];
  
  constructor(private experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    
    this.obtenerExperiencia();
  }
  editarExperiencia(id:number){
    this.router.navigate(['edit', id])
  }

  private obtenerExperiencia(){
    this.experienciaService.obtenerListaExperiencia().subscribe(exp =>{
      this.experiencia = exp;
    })
  }

  eliminarExperiencia(id:number){
    this.experienciaService.eliminarExperiencia(id).subscribe(exp =>{
      
      this.obtenerExperiencia();
    })
  }

}
