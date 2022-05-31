import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/environments/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-exp-alta',
  templateUrl: './exp-alta.component.html',
  styleUrls: ['./exp-alta.component.css']
})
export class ExpAltaComponent implements OnInit {
  experiencia: Experiencia = new Experiencia();
  constructor(private experienciaService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
   
  }

  guardarExperiencia(){
    this.experienciaService.saveExperiencia(this.experiencia).subscribe(d =>{
      this.irAHome();

    }, error => console.log(error));
    
  }
  irAHome(){
    this.router.navigate(['/home']);
  }
  onSubmit(){
    this.guardarExperiencia();

  }
}