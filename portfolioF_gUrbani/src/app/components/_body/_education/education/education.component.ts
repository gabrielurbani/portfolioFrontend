import { Component, OnInit } from '@angular/core';
import { Education } from 'src/environments/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations:Education[];
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.obtenerEducation();
  }
  private obtenerEducation(){
    this.educationService.obtenerListaEducation().subscribe(ed =>{
      this.educations = ed;
    })
  }

}
