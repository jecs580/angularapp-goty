import { RouterModule } from '@angular/router';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraComponent
  ],
  exports:[
    NavbarComponent,
    GraficoBarraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ]
})
export class ComponentsModule { }
