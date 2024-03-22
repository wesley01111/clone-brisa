import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { MenuComponent } from './component/menu/menu.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { PreConteudoComponent } from './component/pre-conteudo/pre-conteudo.component';
import { ConteudoComponent } from './component/conteudo/conteudo/conteudo.component';
import { PlanosComponent } from './component/conteudo/planos/planos.component';
import { AtendimentosComponent } from './component/canais/atendimentos/atendimentos.component';
import { OpcoesComponent } from './component/canais/opcoes/opcoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CabecalhoComponent,
    MenuComponent,
    CarouselComponent,
    PreConteudoComponent,
    ConteudoComponent,
    PlanosComponent,
    AtendimentosComponent,
    OpcoesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
