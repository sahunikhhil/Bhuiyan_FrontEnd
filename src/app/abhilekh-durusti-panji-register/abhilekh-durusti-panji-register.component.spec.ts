import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhilekhDurustiPanjiRegisterComponent } from './abhilekh-durusti-panji-register.component';

describe('AbhilekhDurustiPanjiRegisterComponent', () => {
  let component: AbhilekhDurustiPanjiRegisterComponent;
  let fixture: ComponentFixture<AbhilekhDurustiPanjiRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbhilekhDurustiPanjiRegisterComponent]
    });
    fixture = TestBed.createComponent(AbhilekhDurustiPanjiRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
