import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarcomboComponent } from './montarcombo.component';

describe('MontarcomboComponent', () => {
  let component: MontarcomboComponent;
  let fixture: ComponentFixture<MontarcomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MontarcomboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MontarcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
