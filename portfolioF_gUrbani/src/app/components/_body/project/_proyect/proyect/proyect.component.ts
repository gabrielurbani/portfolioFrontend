import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/environments/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  project:Projects[];
  
  constructor(private projectsService: ProjectsService, private router:Router) { }

  ngOnInit(): void {
    
    this.obtenerProject();
  }
  editarProject(id:number){
    this.router.navigate(['edit-proj', id])
  }

  private obtenerProject(){
    this.projectsService.obtenerListaProject().subscribe(exp =>{
      this.project = exp;
    })
  }

  eliminarProject(id:number){
    this.projectsService.eliminarProject(id).subscribe(exp =>{
          
      this.obtenerProject();
    })
  }

}
