import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialongPokemonComponent } from './dialong-pokemon.component';

describe('DialongPokemonComponent', () => {
  let component: DialongPokemonComponent;
  let fixture: ComponentFixture<DialongPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialongPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialongPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
