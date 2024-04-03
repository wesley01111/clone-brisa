import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrl: './opcoes.component.css'
})
export class OpcoesComponent implements OnInit {

  @Input()
    foto:string = ""
    @Input()
    titulo:string = ""

  ngOnInit(): void {
   
  }

}
