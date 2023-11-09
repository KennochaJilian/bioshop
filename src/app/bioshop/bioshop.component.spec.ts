import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioshopComponent } from './bioshop.component';

describe('BioshopComponent', () => {
  let component: BioshopComponent;
  let fixture: ComponentFixture<BioshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
