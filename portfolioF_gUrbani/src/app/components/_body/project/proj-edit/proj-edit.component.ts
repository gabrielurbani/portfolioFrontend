import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/environments/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-proj-edit',
  templateUrl: './proj-edit.component.html',
  styleUrls: ['./proj-edit.component.css']
})
export class ProjEditComponent implements OnInit {

id:number;
project:Projects = new Projects();
constructor(private projectsService:ProjectsService,private router:Router,private route:ActivatedRoute) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.projectsService.obtenerProjectPorId(this.id).subscribe(dato =>{
    this.project = dato;
  },error => console.log(error));
}

irAHome(){
  this.router.navigate(['/home']);
   }

onSubmit(){
  this.projectsService.saveProject(this.project).subscribe(dato => {
    this.irAHome();
  },error => console.log(error));
}
}