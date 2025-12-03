import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuchNorris } from './chuch-norris';

describe('ChuchNorris', () => {
  let component: ChuchNorris;
  let fixture: ComponentFixture<ChuchNorris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChuchNorris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuchNorris);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
