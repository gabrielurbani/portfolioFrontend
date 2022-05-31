import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/environments/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edu-edit',
  templateUrl: './edu-edit.component.html',
  styleUrls: ['./edu-edit.component.css']
})
export class EduEditComponent implements OnInit {

  id:number;
  education:Education = new Education();
  constructor(private educationService:EducationService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.educationService.obtenerEducationPorId(this.id).subscribe(dato =>{
      this.education = dato;
    },error => console.log(error));
  }
  
  irAHome(){
    this.router.navigate(['/home']);
     }
  
  onSubmit(){
    this.educationService.saveEducation(this.education).subscribe(dato => {
      this.irAHome();
    },error => console.log(error));
  }
}
