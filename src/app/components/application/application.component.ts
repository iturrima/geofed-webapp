import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationsService } from '../../servicios/applications.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',

})
export class ApplicationComponent {

  application:any = {};


  constructor  ( private activatedRoute: ActivatedRoute,
                 private _applicationsService: ApplicationsService

   ){

    this.activatedRoute.params.subscribe( params =>{
      console.log ( params['id'] );
      this.application = this._applicationsService.getApplication( params['id']);
      console.log ( this.application );

    });

  }

}
