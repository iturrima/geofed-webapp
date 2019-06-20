import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { Compac3dComponent } from './components/compac3d/compac3d.component';
import { ContactComponent } from './components/contact/contact.component';
import { ApplicationComponent } from './components/application/application.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'compac3d', component: Compac3dComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'application/:id', component: ApplicationComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true });
