import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/environments/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  projects!: Projects;
 
  usuarioAutenticado:boolean=true;//al inicio   debe estar en false
  
  form:FormGroup;
  

  constructor(private projetcService: ProjectsService,private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      descripcion:['',[Validators.required]],
      fecha:['',[Validators.required]],
      url_project:['',[Validators.required]],
      url:['https://',[Validators.required, Validators.pattern('https?://.+')]]
    })
   }
   get name()
   {
     return this.form.get("name");
   }

  ngOnInit(): void {
    this.projetcService.obtenerDatosProyecto(1).subscribe(d => {
      console.log(d);
      this.projects = d;

    })
  }

  guardarDatosProyecto(){
    if (this.form.valid)
    {
      let name=this.form.get("name")?.value;
      let descripcion=this.form.get("descripcion")?.value;
      let fecha=this.form.get("fecha")?.value;
      let url_project=this.form.get("url_project")?.value;
      let url=this.form.get("url")?.value;

      let projectEdit=new Projects(this.projects.id, name,descripcion,fecha,url_project, url);
      this.projetcService.editarDatosProyecto(projectEdit).subscribe({next: (d) => {
        this.projects = projectEdit;
        document.getElementById("cerrarModalProject")?.click();
      },
        error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
      })
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
  mostrarDatosProyecto()
  {
    this.form.get("name")?.setValue(this.projects.name);
    this.form.get("descripcion")?.setValue(this.projects.descripcion);
    this.form.get("fecha")?.setValue(this.projects.fecha);
    this.form.get("url_project")?.setValue(this.projects.url_project);
    this.form.get("url")?.setValue(this.projects.img);
    
  }
    

}


