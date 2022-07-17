import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,   
    ExperienciaLaboralComponent, 
    AcercaDeComponent, 
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
