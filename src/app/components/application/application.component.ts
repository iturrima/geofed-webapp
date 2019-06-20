import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compac3dService } from '../../servicios/compac3d.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',

})
export class ApplicationComponent {

  application:any = {};


  constructor  ( private activatedRoute: ActivatedRoute,
                 private _compac3dService: Compac3dService

   ){

    this.activatedRoute.params.subscribe( params =>{
      console.log ( params['id'] );
      this.application = this._compac3dService.getApplication( params['id']);
      console.log ( this.application );

    });

  }

}
