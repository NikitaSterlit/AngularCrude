import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivenformComponent } from './modeldrivenform.component';

describe('ModeldrivenformComponent', () => {
  let component: ModeldrivenformComponent;
  let fixture: ComponentFixture<ModeldrivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldrivenformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
