import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'YEqsVXk3spjbwWpSRTOewZRDLLbE75iY';
  private limit: number = 30;
  private _historial: string[] = [];

  public results: Gif[] = []

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { }

  buscarGifs(query: string): void {

    this.http.get<SearchGifsResponse>('https://api.giphy.com/v1/gifs/search?api_key=' + this.apiKey + '&q=' + query.replace(/\s+/g, '') + '&limit=' + this.limit)
      .subscribe(response => {
        this.results = response.data;
      }) // suscribe() se ejecuta cuando tengo la respuesta de la peticion http, es un observable

    this.registrarBusqueda(query);

  }

  registrarBusqueda(query: string): void {

    this._historial.unshift(query);
    this._historial = this._historial.splice(0, 5);

  }
}
