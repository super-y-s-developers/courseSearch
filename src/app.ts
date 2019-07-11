import * as express from 'express';
import * as bodyParser from "body-parser";

import {coursesSearch} from "./utils/siaSearch";

function updateCourses(){
    return coursesSearch(null,null,null,null,null,"L6-21:M6-21:C6-21:J6-21:V6-21:S6-21,",1,5000)
} 

const port: number = parseInt(process.env.PORT) || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    //res.send('Course search!!');
    updateCourses().then( data => {
        res.json(data.result.asignaturas.list.map(x => {return {
            "id" : x.id_asignatura,
            "code" : x.codigo,
            "title" : x.nombre,
            "credits" : x.creditos,
            "subjectType" : x.tipologia

        }}));
    }).catch(err => {
        console.error(err);
    })    
});

app.listen(port, function () {
  console.log(`Server running on port ${port}!`);
});