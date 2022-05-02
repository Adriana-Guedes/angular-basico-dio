
import { CoreModule } from './core/component/core.module';
import { CourseModule } from './courses/course.module';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

  ],


  imports: [
    BrowserModule,

    CourseModule,
    CoreModule,

    HttpClientModule,
      //CRIAÇÃO DE ROTAS
    RouterModule.forRoot([ // raiz da aplicação, o root onde espera um array do tipo rota

      //OBJETO DE LISTAGEM DE CURSOS

      {
        //OBJETO DE ROTA ( O ESPAÇO VAZIO SIGNIFICA QUE A ROOT DA ROTA SERÁ REDIRECINADA PARA COURSES )
        path: '', redirectTo:'courses', pathMatch: 'full'  //direcionamento da rota para courses
      },

    ])

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
