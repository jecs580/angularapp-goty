import { Game } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  juegos:Game[]=[];
  constructor(private http:HttpClient) { }
  
  getNominados(){
    if(this.juegos.length===0){
      console.log('Desde internet');
      
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
      .pipe(
        tap(resp=>this.juegos=resp)
      );

    }else{
      console.log('Desde cache');
      return of(this.juegos);
    }
  }

  VotarJuego(id:string){
    return this.http.put(`${environment.url}/api/goty/${id}`,{});
  }

}
