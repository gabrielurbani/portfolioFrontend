import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/environments/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proj-edit',
  templateUrl: './proj-edit.component.html',
  styleUrls: ['./proj-edit.component.css']
})
export class ProjEditComponent implements OnInit {
  form: FormGroup;
id:number;
project:Projects = new Projects();
constructor(private projectsService:ProjectsService,private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) {
  this.form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    url_project: ['https://', [Validators.required, Validators.pattern('https?://.+')]],
    img: ['', [Validators.required]],
  })
 }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.projectsService.obtenerProjectPorId(this.id).subscribe(dato =>{
    this.project = dato;
  },error => console.log(error));
}

irAHome(){
  this.router.navigate(['/home']);
   }
   get name() {
    return this.form.get("name");
  }
  get descripcion() {
    return this.form.get("descripcion");
  }
  get fecha() {
    return this.form.get("fecha");
  }
  get url_project() {
    return this.form.get("url_project");
  }
   get img() {
    return this.form.get("img");
  }
 

onSubmit(){
  this.projectsService.saveProject(this.project).subscribe(dato => {
    this.irAHome();
  },error => console.log(error));
}
}