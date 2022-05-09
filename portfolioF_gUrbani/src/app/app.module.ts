import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { SocialComponent } from './components/social/social.component';
import { LoguinComponent } from './components/loguin/loguin.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LogoAPComponent,
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
