import { Component, OnInit } from '@angular/core';
import { Compac3dService, Application } from '../../servicios/compac3d.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compac3d',
  templateUrl: './compac3d.component.html'
})
export class Compac3dComponent implements OnInit {

  compac3d:Application[] = [];

  constructor ( private _compac3dService:Compac3dService,
                private router:Router
                ){


  }
ngOnInit() {

  this.compac3d = this._compac3dService.getCompac3d();

    console.log (this.compac3d);
  }

  verApplication(idx:number){
    this.router.navigate( ['/application', idx] );
  }

}
