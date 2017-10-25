import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MyDataService {

  constructor(private http: Http) {}

  fetchData() {
    /*
      Ahora mismo estamos obteniendo los datos de un recurso
      que se encuentra en el mismo proyecto, en caso de querer
      obtenerlos de una dirección externa, solamente deberíamos
      cambiar la url que estamos utilizando: assets/students.json
      por la URL del recurso deseado.
    */
    return this.http.get('assets/students.json').map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }

  obj = {
    id: "1",
    name: "Jacobo",
    rollnumber: "14234"
  }

  success () {
    return 'Successful';
  }

}
