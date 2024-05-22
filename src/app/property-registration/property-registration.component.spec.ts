import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyRegistrationComponent } from './property-registration.component';
// import { PropertyRegistrationComponent } from './PropertyRegistrationComponent';

describe('PropertyRegistrationComponent', () => {
  let component: PropertyRegistrationComponent;
  let fixture: ComponentFixture<PropertyRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyRegistrationComponent]
    });
    fixture = TestBed.createComponent(PropertyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
