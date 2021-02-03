import { Game } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  juegos:any[]=[];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
    .pipe(
      map((resp:Game[])=>{
        return resp.map(({name,votos})=>{
          return {name, value:votos}
        })
      })
    )
    .subscribe(
      resp=>{
        this.juegos = resp;
        
      }
    )
  }

}
