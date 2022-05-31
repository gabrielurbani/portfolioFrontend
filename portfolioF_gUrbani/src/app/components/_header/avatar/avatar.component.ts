import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { About } from 'src/environments/about';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

export class AvatarComponent implements OnInit {
  about!: About;
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.obtenerDatosAbout(1).subscribe(d => {
      console.log(d);
      this.about = d;
    })
  }

}
