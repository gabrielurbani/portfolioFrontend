import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/environments/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit {
  id:number;
  experiencia:Experiencia = new Experiencia();
  constructor(private experienciaService:ExperienciaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaPorId(this.id).subscribe(dato =>{
      this.experiencia = dato;
    },error => console.log(error));
  }

  irAHome(){
    this.router.navigate(['/home']);
     }

  onSubmit(){
    this.experienciaService.saveExperiencia(this.experiencia).subscribe(dato => {
      this.irAHome();
    },error => console.log(error));
  }
}