import { Game } from './../../interfaces/interfaces';
import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

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

}
