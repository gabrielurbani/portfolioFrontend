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
import { AboutComponent } from './components/_body/_about/about/about.component';
import { ExperienceComponent } from './components/_body/_experience/experience/experience.component';
import { EducationComponent } from './components/_body/_education/education/education.component';
import { SkillComponent } from './components/_body/_skill/skill/skill.component';
import { ProyectComponent } from './components/_body/_proyect/proyect/proyect.component';
import { NameComponent } from './components/_body/_about/name/name.component';
import { TextComponent } from './components/_body/_about/text/text.component';
import { BodyComponent } from './components/_body/body/body.component';
import { LanguageComponent } from './components/_body/_skill/language/language.component';

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
    NameComponent,
    TextComponent,
    BodyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
