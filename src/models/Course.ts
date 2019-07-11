import {coursesSearch} from "utils/siaSearch"

export default class Course {
    id: String;
    code: number;
    name: String;
    subjectType: String;
    credits: number;
    groups: [];
    prerrequisites: [];

    constructor(id: String, name: String, subjectType: String, credits: number, groups: [], prerrequisites: []) {
        this.id =  id;
        this.name = name;
        this.subjectType = subjectType;
        this.credits = credits;
        this.groups = groups;
        this.prerrequisites = prerrequisites;
    }

    updateCourses(){
        coursesSearch(null,null,null,null,null,"L6-21:M6-21:C6-21:J6-21:V6-21:S6-21,",1,5000)
        .then((data)=>{
            console.log(data.result.asignaturas);
            return data.result.asignaturas;
        })
    }
  }
