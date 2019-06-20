import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-tarjeta',
  templateUrl: './application-tarjeta.component.html'
})
export class ApplicationTarjetaComponent implements OnInit {

@Input() application: any = {};
@Input() index: number;

@Output() applicationSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
  // private router: Router
  this.applicationSeleccionado= new EventEmitter();
  }
  ngOnInit() {
  }

    verApplication(){
      console.log( this.index );
      this.router.navigate(['/application', this.index]);  
      // this.applicationSeleccionado= new EventEmitter();
      // this.applicationSeleccionado.emit( this.index);

    }


}
