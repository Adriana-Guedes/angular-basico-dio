
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Course} from './course';


@Component({
 templateUrl: './course-info.component.html'

})

export class CourseInfoComponent implements  OnInit  {

  course: Course | any;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}


  ngOnInit(): void {

    //como sempre retorna uma string o sinal de + é para convertar para number
    //this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
    next: Course => this.course = this.course,
      error: err => console.log('Error', err)


    });

  }
  save():void{
    this.courseService.save(this.course).subscribe({
      next: course => console.log(`Saved whith sucess`, this.course),
      error: err => console.log('Error', err)
    }) ;

  }


}
