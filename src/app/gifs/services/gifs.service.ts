import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'YEqsVXk3spjbwWpSRTOewZRDLLbE75iY';
  private apiURL: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 30;
  private _historial: string[] = [];

  public results: Gif[] = []

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('history')) || [];
  }

  buscarGifs(query: string): void {

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query.replace(/\s+/g, ''))
      .set('limit', this.limit.toString());

    this.http.get<SearchGifsResponse>(`${this.apiURL}/search`, { params })
      .subscribe(response => {
        this.results = response.data;
      }) // suscribe() se ejecuta cuando tengo la respuesta de la peticion http, es un observable

    if (!this._historial.includes(query)) {
      this.registrarBusqueda(query);
    }

  }

  registrarBusqueda(query: string): void {

    this._historial.unshift(query);
    this._historial = this._historial.splice(0, 5);
    localStorage.setItem('history', JSON.stringify(this._historial));

  }
}
