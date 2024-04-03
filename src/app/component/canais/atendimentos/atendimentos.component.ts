import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrl: './atendimentos.component.css'
})
export class AtendimentosComponent implements OnInit {

  @Input()
  texth:string=''
  @Input()
  textp:string=''

  ngOnInit(): void {

  }

}
