import { Component, OnInit} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgModel, FormsModule } from '@angular/forms';
import {Injector } from '@angular/core';
  import { from } from 'rxjs';
@Component({
  selector: 'app-saluto',
  template: `
Insert Nome:
<input type="text" value="Maurizio" [(ngModel)]="valore">

Bungiorno <b>{{ valore }}</b>
`,
  styleUrls: ['./saluto.component.css']
})
export class SalutoComponent implements OnInit {

  constructor( private injector: Injector)
   { // andiamo a convertire il componente in un elemento personalizzato
    const elemento = createCustomElement(SalutoComponent, { injector });
    customElements.define('saluti-saluti', elemento);
   }

  ngOnInit() {
  }

}
