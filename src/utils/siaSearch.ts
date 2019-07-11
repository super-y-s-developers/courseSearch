import * as request from "request-promise-native";

import Typology from "enums/Typology";
import AcademicLevel from "enums/AcademicLevel";


let url:string = "https://siabog.unal.edu.co/buscador/JSON-RPC";

export function coursesSearch(course?:string | number, typeAcademicLevel?:AcademicLevel, 
                    type?:Typology, planAcademicLevel?:AcademicLevel, plan?: number,
                    schedule?:string, page:number = 1, coursePerPage:number = 50){
        
    let method:String = "buscador.obtenerAsignaturas";

    let options = {
        method: 'POST',
        uri: url,
        body: {
            method: method,
            params: [course || "",typeAcademicLevel || "",type || "", 
                        planAcademicLevel || "", plan || "", schedule || "", 
                        page || "", coursePerPage || ""],
        },
        json: true
    };

    return request(options);
}
