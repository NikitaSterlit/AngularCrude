import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpformComponent } from './httpform.component';

describe('HttpformComponent', () => {
  let component: HttpformComponent;
  let fixture: ComponentFixture<HttpformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
