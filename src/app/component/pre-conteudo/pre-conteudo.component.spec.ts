import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreConteudoComponent } from './pre-conteudo.component';

describe('PreConteudoComponent', () => {
  let component: PreConteudoComponent;
  let fixture: ComponentFixture<PreConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
