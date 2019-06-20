import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationsService } from '../../servicios/applications.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  applications:any[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _applicationsService:ApplicationsService
  ) {



  }

  

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      console.log( params ['termino']);
      this.applications = this._applicationsService.buscarApplications( params ['termino']);
      console.log( this.applications );
    })

  }

}
