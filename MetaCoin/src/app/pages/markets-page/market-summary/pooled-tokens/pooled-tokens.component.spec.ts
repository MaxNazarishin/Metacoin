import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooledTokensComponent } from './pooled-tokens.component';

describe('PooledTokensComponent', () => {
  let component: PooledTokensComponent;
  let fixture: ComponentFixture<PooledTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PooledTokensComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PooledTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
