import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_header/header/header.component';
import { NavbarComponent } from './components/_header/navbar/navbar.component';
import { BannerComponent } from './components/_header/banner/banner.component';
import { SocialComponent } from './components/_header/social/social.component';
import { LoguinComponent } from './components/_header/loguin/loguin.component';
import { HeroeComponent } from './components/_header/heroe/heroe.component';
import { LogoComponent } from './components/_header/logo/logo.component';
import { AboutComponent } from './components/_body/about/about.component'
import { ExperienceComponent } from './components/_body/experiencia/_experience/experience/experience.component';
import { EducationComponent } from './components/_body/education/education/education.component';
import { SkillComponent } from './components/_body/_skill/skill/skill.component';
import { ProyectComponent } from './components/_body/project/_proyect/proyect/proyect.component';
import { BodyComponent } from './components/_body/body/body.component';
import { LanguageComponent } from './components/_body/_skill/language/language.component';
import { FrameworkComponent } from './components/_body/_skill/framework/framework.component';
import { HttpClientModule} from '@angular/common/http';
import { EduEditComponent } from './components/_body/education/edu-edit/edu-edit.component';
import { FormsModule } from '@angular/forms';
import { ExpEditComponent } from './components/_body/experiencia/exp-edit/exp-edit.component';
import { ExpAltaComponent } from './components/_body/experiencia/exp-alta/exp-alta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjEditComponent } from './components/_body/project/proj-edit/proj-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LogoComponent,
    BannerComponent,
    SocialComponent,
    LoguinComponent,
    HeroeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProyectComponent,
    BodyComponent,
    LanguageComponent,
    FrameworkComponent,
    EduEditComponent,
    ExpEditComponent,
    ExpAltaComponent,
    ProjEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
