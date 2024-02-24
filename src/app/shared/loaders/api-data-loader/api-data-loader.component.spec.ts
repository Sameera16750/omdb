import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataLoaderComponent } from './api-data-loader.component';

describe('ApiDataLoaderComponent', () => {
  let component: ApiDataLoaderComponent;
  let fixture: ComponentFixture<ApiDataLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDataLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiDataLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
