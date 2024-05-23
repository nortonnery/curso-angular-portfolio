import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonwledgeComponent } from './konwledge.component';

describe('KonwledgeComponent', () => {
  let component: KonwledgeComponent;
  let fixture: ComponentFixture<KonwledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonwledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KonwledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
