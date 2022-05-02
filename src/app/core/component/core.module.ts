import { Error404Component } from './error-404/error-404.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
     NavBarComponent,
     Error404Component
  ],
  imports: [
      RouterModule.forChild ([

        {
          //QUANDO O ANGULAR NÃO ENCONTRAR A ROTA
          path:'**', component: Error404Component //para uma pagina de erro quando a rota não é encontrada
        }
      ])
  ],

  exports: [
      NavBarComponent

  ]

})

export class CoreModule
{

}
