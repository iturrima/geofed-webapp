import { Injectable } from '@angular/core';

@Injectable()
export class Compac3dService {

private compac3d:Application []= [
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

  getCompac3d():Application[]{
    return this.compac3d;
  }

  getApplication( idx: string ){
    return this.compac3d[idx];
  }

  buscarCompac3d( termino:string ){
    let compac3dArr:Application[]=[];
    termino=termino.toLowerCase();

    for (let application of this.compac3d){
      let nombre=application.tituloCalculo.toLowerCase();
      if (nombre.indexOf ( termino ) >= 0 ){
        compac3dArr.push( application )

      }
    }
    return compac3dArr;
  }


}

export interface Application {
  tituloCalculo: string;
  detalleCalculo: string;
  img: string;


}
