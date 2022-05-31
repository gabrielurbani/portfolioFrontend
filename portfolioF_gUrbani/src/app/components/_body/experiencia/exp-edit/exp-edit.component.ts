import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/environments/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit {
  id:number;
  experiencia:Experiencia = new Experiencia();
  form:FormGroup;
  constructor(private experienciaService:ExperienciaService,private router:Router,private route:ActivatedRoute, private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
      cliente: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      url_cliente: ['https://',[Validators.required, Validators.pattern('https?://.+')]],
      img: ['', [Validators.required]],
      tecnologias: ['', [Validators.required]]
    })
   }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaPorId(this.id).subscribe(dato =>{
      this.experiencia = dato;
    },error => console.log(error));
  }

  irAHome(){
    this.router.navigate(['/home']);
     }
     get cliente() {
      return this.form.get("cliente");
    }
    get descripcion() {
      return this.form.get("descripcion");
    }
    get fecha() {
      return this.form.get("fecha");
    }
    get url_cliente() {
      return this.form.get("url_cliente");
    }
     get img() {
      return this.form.get("img");
    }
     get tecnologias() {
      return this.form.get("tecnologias");
    }
  onSubmit(){
    this.experienciaService.saveExperiencia(this.experiencia).subscribe(dato => {
      this.irAHome();
    },error => console.log(error));
  }
}