import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsPrivateComponent } from './persons-private.component';

describe('PersonsPrivateComponent', () => {
  let component: PersonsPrivateComponent;
  let fixture: ComponentFixture<PersonsPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
