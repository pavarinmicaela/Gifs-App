import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  registrarBusqueda(query: string): void {

    this._historial.unshift(query);
    this._historial = this._historial.splice(0, 3);

  }
}
