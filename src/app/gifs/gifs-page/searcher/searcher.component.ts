import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }

  buscar() {

    const query = this.txtBuscar.nativeElement.value;

    if (query.trim().length === 0) {
      return;
    }
    else {
      this.gifsService.registrarBusqueda(this.txtBuscar.nativeElement.value);
      this.txtBuscar.nativeElement.value = '';
    }

  }

}
