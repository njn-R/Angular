import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUIComponent } from './material-ui.component';

describe('MaterialUIComponent', () => {
  let component: MaterialUIComponent;
  let fixture: ComponentFixture<MaterialUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
