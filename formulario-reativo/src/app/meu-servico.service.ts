import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeuServicoService {

  url = "http://localhost:3000/"
  urlAdd = "http://localhost:3000/add"
  constructor(private http: HttpClient) { }

  adicionarContato(contato) {
    console.log("contato no serviço ", contato)
    return this.http.post<any>(this.urlAdd, contato)
  }
  getContatos() {
    return this.http.get<Array<any>>(this.url)
  }



}