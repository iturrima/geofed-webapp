import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationsService {

private applications:Application []= [
    {
      tituloCalculo: "Water Content Calculator",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg1.jpg"
    },
    {
      tituloCalculo: "Geotechnical Index Properties",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg2.jpg"
    },
    {
      tituloCalculo: "Density Calculator",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg3.jpg"
    },
    {
      tituloCalculo: "Particle Size Analysis",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg2.jpg"
    },
    {
      tituloCalculo: "Soil Plasticity",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg3.jpg"
    },
    {
      tituloCalculo: "Proctor Calculator",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg1.jpg"
    },
    {
      tituloCalculo: "2D Compaction Curve",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg3.jpg"
    },
    {
      tituloCalculo: "Density Growth Curve",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg2.jpg"
    },
    {
      tituloCalculo: "3D Compaction Forestcast",
      detalleCalculo: "This card has supporting text below as a natural lead-in to additional content.",
      img: "./assets/images/bg/bg1.jpg"
    }
  ];


  constructor() {
    console.log("servicio listo para usar");
    }

  getApplications():Application[]{
    return this.applications;
  }

  getApplication( idx: string ){
    return this.applications[idx];
  }

  buscarApplications( termino:string ){
    let applicationsArr:Application[]=[];
    termino=termino.toLowerCase();

    for (let application of this.applications){
      let nombre=application.tituloCalculo.toLowerCase();
      if (nombre.indexOf ( termino ) >= 0 ){
        applicationsArr.push( application )

      }
    }
    return applicationsArr;
  }


}

export interface Application {
  tituloCalculo: string;
  detalleCalculo: string;
  img: string;


}
