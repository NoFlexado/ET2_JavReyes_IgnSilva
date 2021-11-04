import { Component } from '@angular/core';

interface Componente{

  icon: string; 

  name: string; 

  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    {

      icon: 'bag-add-outline',

      name: 'Anticonceptivos',

      redirecTo: '/anticonceptivos'

    },

    {

      icon: 'medical-outline',

      name: 'API COVID',

      redirecTo: '/enfermedades'

    },
    {

      icon: 'cloudy-outline',

      name: 'CRUD',

      redirecTo: '/datos'

    },
    {

      icon: 'person-circle-outline',

      name: 'Login',

      redirecTo: '/login'

    },
    {

      icon: 'person-add-outline',

      name: 'Registro',

      redirecTo: '/registro'

    },

  ];
}