import { Component, OnInit } from '@angular/core';
import { ApplicationsService, Application } from '../../servicios/applications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html'
})
export class ApplicationsComponent implements OnInit {

  applications:Application[] = [];

  constructor ( private _applicationsService:ApplicationsService,
                private router:Router
                ){


  }
ngOnInit() {

  this.applications = this._applicationsService.getApplications();

    console.log (this.applications);
  }

  verApplication(idx:number){
    this.router.navigate( ['/application', idx] );
  }

}
