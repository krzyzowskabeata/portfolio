import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisComponent } from './fris.component';

describe('FrisComponent', () => {
  let component: FrisComponent;
  let fixture: ComponentFixture<FrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
