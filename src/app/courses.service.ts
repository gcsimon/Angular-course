import { Component } from "@angular/core";

export class CoursesService {
    
    getCourses() {
        return ["course1","course2","course3","course4", "test"];
    }

    getSize( ){
        return "3";
    }

}