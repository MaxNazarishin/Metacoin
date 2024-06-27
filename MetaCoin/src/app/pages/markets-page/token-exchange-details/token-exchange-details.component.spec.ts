import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenExchangeDetailsComponent } from './token-exchange-details.component';

describe('TokenExchangeDetailsComponent', () => {
  let component: TokenExchangeDetailsComponent;
  let fixture: ComponentFixture<TokenExchangeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenExchangeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenExchangeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
