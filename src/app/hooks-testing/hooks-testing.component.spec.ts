import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksTestingComponent } from './hooks-testing.component';

describe('HooksTestingComponent', () => {
  let component: HooksTestingComponent;
  let fixture: ComponentFixture<HooksTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
