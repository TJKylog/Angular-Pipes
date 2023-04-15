import { Component } from '@angular/core';
import { Hero,Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent {
  mayusculas: boolean = true;

  cambiar() {
    this.mayusculas = !this.mayusculas;
  }

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ];

  public orderBy: keyof Hero | null = null;

  changeOrderBy(orderBy: keyof Hero | null) {
    this.orderBy = orderBy;
  }
}
