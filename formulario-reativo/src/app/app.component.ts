import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MeuServicoService } from './meu-servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  contatos: Array<any>;
  contato: any;
  formulario:FormGroup;

  constructor(private meuServicoService: MeuServicoService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario()
   
    this.meuServicoService.getContatos().subscribe(result => {
      this.contatos = result
    })
  }

  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      nome:[null,Validators.required],
      email:[null, [Validators.required,Validators.email]]
    })
  }

  criar() {
    this.meuServicoService.adicionarContato(this.formulario.value).subscribe(resposta => {
      this.contatos.push(resposta)
      this.formulario.reset()
      //frm.reset()
    })
  }




}