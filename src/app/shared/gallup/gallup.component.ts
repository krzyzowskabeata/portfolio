import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Gallup } from './gallup';

@Component({
  selector: 'pf-gallup',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './gallup.component.html',
  styleUrl: './gallup.component.scss'
})
export class GallupComponent {

  @Input({ required: true }) gallup?: Gallup[];

  title = 'GALLUP';
  subtitle = 'CliftonStrengths';

  activeColor: string | undefined;

  setActiveColor(color: string): void {
    if (this.activeColor !== color) this.activeColor = color;
    else this.activeColor = undefined;
  }

}
