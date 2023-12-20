import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturarPokemonComponent } from './capturar-pokemon.component';

describe('CapturarPokemonComponent', () => {
  let component: CapturarPokemonComponent;
  let fixture: ComponentFixture<CapturarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturarPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapturarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
