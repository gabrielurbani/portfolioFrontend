import { Component, OnInit } from '@angular/core';
import { Education } from 'src/environments/education';
import { EducationService } from 'src/app/service/education.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[];
  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEducation();
  }
  private obtenerEducation() {
    this.educationService.obtenerListaEducation().subscribe(ed => {
      this.education = ed;
    })
  }

  editarEducation(id: number) {
    this.router.navigate(['edit-edu', id])
  }

  eliminarEducation(id: number) {
    this.educationService.eliminarEducation(id).subscribe(ed => {
      this.obtenerEducation();
    })
  }
}
