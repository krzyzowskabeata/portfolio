import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Fris } from './fris';

@Component({
  selector: 'pf-fris',
  standalone: true,
  imports: [NgClass, MatCardModule],
  templateUrl: './fris.component.html',
  styleUrl: './fris.component.scss'
})
export class FrisComponent {

  @Input({ required: true }) fris?: Fris;

  title = 'FRIS';
  subtitle = ', w działaniu';

}
