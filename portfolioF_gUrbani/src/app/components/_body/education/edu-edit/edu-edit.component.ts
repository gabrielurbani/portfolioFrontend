import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/environments/education';
import { EducationService } from 'src/app/service/education.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edu-edit',
  templateUrl: './edu-edit.component.html',
  styleUrls: ['./edu-edit.component.css']
})
export class EduEditComponent implements OnInit {
  form: FormGroup;
  id: number;
  education: Education = new Education();
  constructor(private educationService: EducationService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      school: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      url_school: ['https://', [Validators.required, Validators.pattern('https?://.+')]],
      img: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.educationService.obtenerEducationPorId(this.id).subscribe(dato => {
      this.education = dato;
    }, error => console.log(error));
  }

  irAHome() {
    this.router.navigate(['/home']);
  }
  get school() {
    return this.form.get("school");
  }
  get descripcion() {
    return this.form.get("descripcion");
  }
  get fecha() {
    return this.form.get("fecha");
  }
  get url_school() {
    return this.form.get("url_school");
  }
  get img() {
    return this.form.get("img");
  }

  onSubmit() {
    this.educationService.saveEducation(this.education).subscribe(dato => {
      this.irAHome();
    }, error => console.log(error));
  }
}
