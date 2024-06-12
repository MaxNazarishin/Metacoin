import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTokenComponent } from './receive-token.component';

describe('ReceiveTokenComponent', () => {
  let component: ReceiveTokenComponent;
  let fixture: ComponentFixture<ReceiveTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiveTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
