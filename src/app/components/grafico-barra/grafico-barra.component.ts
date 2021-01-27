import { Component, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnDestroy{

  results: any[]=[
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 30
    }
  ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {
    this.intervalo = setInterval(()=>{
      const newResults=[...this.results];
      for (let i in this.results) {
        newResults[i].value= Math.round(Math.random()*500);
      }
      this.results= newResults;
    },1500);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }

}
