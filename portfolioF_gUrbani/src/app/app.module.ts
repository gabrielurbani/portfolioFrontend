import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_header/header/header.component';
import { NavbarComponent } from './components/_header/navbar/navbar.component';
import { BannerComponent } from './components/_header/banner/banner.component';
import { SocialComponent } from './components/_header/social/social.component';
import { LoguinComponent } from './components/_header/loguin/loguin.component';
import { HeroeComponent } from './components/_header/heroe/heroe.component';
import { LogoComponent } from './components/_header/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LogoComponent,
    BannerComponent,
    SocialComponent,
    LoguinComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
