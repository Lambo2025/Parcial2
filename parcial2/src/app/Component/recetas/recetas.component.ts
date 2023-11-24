import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/model/Recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetasList: Recetas[];
  recetasSelected: Recetas;
  nombres: string;

  constructor() {

    this.recetasList =[]
    this.recetasSelected = {

      nombre: '',
      calificacion: 1,
      duracion: 1,
      dificultad: '',
      por: '',
      imagen: ''
    };
    this.nombres = '';
   }
 
  ngOnInit(): void {
    this.getrecetas();

  }

getrecetas() {
  this.recetasList = [{

      "nombre": "Pollo asado",
      "calificacion": 3,
      "duracion": 7,
      "dificultad": "Baja",
      "por": "Panchovilla",
      "imagen": ""

  }]



  verDetalle(rSelected: Recetas) {
    this.recetasSelected = rSelected
  }







}
}
