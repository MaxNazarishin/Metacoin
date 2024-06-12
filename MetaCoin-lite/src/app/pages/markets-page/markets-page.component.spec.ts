import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsPageComponent } from './markets-page.component';

describe('MarketsPageComponent', () => {
  let component: MarketsPageComponent;
  let fixture: ComponentFixture<MarketsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketsPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarketsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
