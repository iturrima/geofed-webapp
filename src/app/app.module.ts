import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Graficos
import { ChartsModule } from 'ng2-charts';



//Routes
import { APP_ROUTING } from './app.routes';

//Servicios
import {ApplicationsService } from './servicios/applications.service';



export class modulename { }



//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ApplicationComponent } from './components/application/application.component';
import { ApplicationTarjetaComponent } from './components/application-tarjeta/application-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LineaComponent } from './components/linea/linea.component';
import { TemplateComponent } from './components/formularios/template.component';
import { DataComponent } from './components/formularios/data.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ApplicationsComponent,
    ApplicationComponent,
    ApplicationTarjetaComponent,
    BuscadorComponent,
    LineaComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING

  ],
  providers: [
    ApplicationsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
