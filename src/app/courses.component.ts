
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
import { ArrayType } from '@angular/compiler';

@Component({
    selector: 'courses',
    template: 
    `<h2> {{title}} </h2>       
     <ul>
     <h2> {{"Numero de cursos: "+numeroDeCursos}} </h2>
     
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
     </ul>`
     
})
export class CoursesComponent {

    title = "List of courses";
    courses = [];
    numeroDeCursos;

    
    constructor(service: CoursesService) {  
        this.courses = service.getCourses();
        this.numeroDeCursos = (this.courses).length;  
    }
}

