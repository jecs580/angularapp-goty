import { RouterModule } from '@angular/router';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraComponent
  ],
  exports:[NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
