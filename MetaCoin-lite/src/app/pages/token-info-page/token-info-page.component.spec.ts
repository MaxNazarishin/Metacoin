import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenInfoPageComponent } from './token-info-page.component';

describe('TokenInfoPageComponent', () => {
  let component: TokenInfoPageComponent;
  let fixture: ComponentFixture<TokenInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
