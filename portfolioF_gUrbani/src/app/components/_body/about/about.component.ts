import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { About } from 'src/environments/about';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about!: About;

  usuarioAutenticado: boolean = true;

  form: FormGroup;

  constructor(private aboutService: AboutService, private miFormBuilder: FormBuilder) {
    this.form = this.miFormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required]],
      about_text: ['', [Validators.required]],
      url: ['', [Validators.required]]
    })
  }
  get name() {
    return this.form.get("name");
  }
  get title() {
    return this.form.get("title");
  }
  get about_text() {
    return this.form.get("about_text");
  }
  get url() {
    return this.form.get("url");
  }
  
  ngOnInit(): void {
    this.aboutService.obtenerDatosAbout(1).subscribe(d => {
      console.log(d);
      this.about = d;
    })
  }
  guardarDatosAbout() {
    if (this.form.valid) {
      let name = this.form.get("name")?.value;
      let title = this.form.get("title")?.value;
      let about_text = this.form.get("about_text")?.value;
      let url = this.form.get("url")?.value;

      let aboutEdit = new About(this.about.id, name, title, about_text, url);
      this.aboutService.editarDatosAbout(aboutEdit).subscribe({
        next: (d) => {
          this.about = aboutEdit;
          document.getElementById("cerrarModalAbout")?.click();
        },
        error: (e) => { alert("El registro no se pudo actualizar") }
      })
    }
    else {
      this.form.markAllAsTouched();
    }
  }
  mostrarDatosAbout() {
    this.form.get("name")?.setValue(this.about.name);
    this.form.get("title")?.setValue(this.about.title);
    this.form.get("about_text")?.setValue(this.about.about_text);
    this.form.get("url")?.setValue(this.about.img_avatar);

  }


}
