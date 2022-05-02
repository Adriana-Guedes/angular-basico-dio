import { AppPipeModule } from './../shared/component/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/star.module';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from '@angular/core';





@NgModule({
declarations: [
    CourseListComponent,
    CourseInfoComponent


  ],

  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses',  component: CourseListComponent //swith de courses ( a lista de courses)
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])

  ]
})

export class CourseModule{


}
