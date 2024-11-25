import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallupComponent } from './gallup.component';

describe('GallupComponent', () => {
  let component: GallupComponent;
  let fixture: ComponentFixture<GallupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
