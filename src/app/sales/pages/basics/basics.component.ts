import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {
  nombreLower: string = 'jose';
  nombreUpper: string = 'JOSE';
  nombreCompleto = 'jOse jEsUs';

  fecha: Date = new Date(); // el dia de hoy
  
}
