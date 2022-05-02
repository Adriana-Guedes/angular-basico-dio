import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //NOME DA TAG A SER UTILIZADA NO HTML
  templateUrl: './app.component.html', //HTML QUE SERÁ USADO PARA A REPRESENTAÇÃO VISUAL
  styleUrls: ['./app.component.css']//ESTILO A SER UTILIZADO NESSE COMPONENTE
})
export class AppComponent {
  title = 'course-manager';

}
