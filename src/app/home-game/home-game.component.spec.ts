import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGameComponent } from './home-game.component';

describe('HomeGameComponent', () => {
  let component: HomeGameComponent;
  let fixture: ComponentFixture<HomeGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGameComponent]
    });
    fixture = TestBed.createComponent(HomeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
