import { Game } from './../../interfaces/interfaces';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos:Game[]=[];

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe(
      resp=>{
        this.juegos=resp;
      }
    )
  }

  votarJuego(juego:Game){
    this.gameService.VotarJuego(juego.id).subscribe(
      (resp:{ok:boolean,mensaje:string})=>{
        if(resp.ok){
          Swal.fire('Gracias',resp.mensaje,'success');
        }
      },
      error=>{
        console.log(error.error.mensaje);
        Swal.fire('Error',error.error.mensaje,'error');
      }
    )
  }
}
