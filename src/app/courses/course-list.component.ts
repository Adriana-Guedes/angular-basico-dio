import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from '@angular/core';


@Component({
  //selector: 'app-course-list',  A REFERENCIA DELE NÃO SERÁ MAIS SELECTOR É VIA ROTA NO APP MODULE ( SWITH DOS CURSOS SERÃO INDICADOS VIA TAG <ROUTER-OUTLET> NO APP-COMPONENT.HTML)
  templateUrl: './course-list-component.html'

})


export class CourseListComponent implements OnInit{


  filteredCourses: Course[] = [];

  //CLASSE DO VALOR QUE QUEREMOS EXIBIR/
 courses: Course[] = []; //ARRAY INICIANDO VAZIO ( VARIAVEL SOMENTE DO COMPONENT)

 _filterBy!: String; //o anderlaine é para informar que a variavel fique somente no componente


//QUANDO O ANGULAR FOR CARREGAR A APLICAÇÃO NO BOOTSTRAP ELE VAI CARREGAR O COURSESERVICE,
//ELE VAI VERIFICAR A NOTAÇÃO DE INDEPENDECIA DO MESMO TIPO DO OBJETO QUE ESTA ELEGIVEL ,
//ELE VAI PEGAR O OJETO QUE ESTA EM UMA INSTANCIA NA MEMORIA DA MAQUINA E VAI INJETAR NO CONTRUTOR
constructor(private courseService: CourseService){

}


 //E UM ARRAY DESSE MESMO TIPO DE CLASSE
 ngOnInit(): void {
  this.retrievAll();
}


retrievAll(): void {
  this.courseService.retrieveAll().subscribe({
    //se a requisição for respondida com sucesso, chama-se o next e a lista de courses
    next:courses => {
      this.courses = courses;
      this.filteredCourses =this.courses; //metodo do service, e retornara a lista
    },
    //função de erro ( ira exibi-lo no console.log)
    error: err => console.log('Error', err)
  });

}

deleteById(courseId: number): void{

  this.courseService.deleteById(courseId).subscribe({
    next:() =>{
      console.log('Deleted with sucess' );
      this.retrievAll(); // após o delete chamando a consulta novamente
    },
    error: err => console.log('Error', err)
  })
}


//EVENTO DO INPUT
set filter(value:String){

  this._filterBy = value; //funcionara como busca
  //FILTRANDO O CURSO E IGUALANDO O VALOR DO FILTRO EM MEMORIA AO NOSSO FILTRO DE CURSO
  this.filteredCourses = this.courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);

}


//EVENTO DE SAIDA
get filter(){
   return this._filterBy;

  }

}

