import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compac3dService } from '../../servicios/compac3d.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  compac3d:any[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _compac3dService:Compac3dService
  ) {



  }

  

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      console.log( params ['termino']);
      this.compac3d = this._compac3dService.buscarCompac3d( params ['termino']);
      console.log( this.compac3d );
    })

  }

}
