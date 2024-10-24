import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'pf-tooltip',
  standalone: true,
  imports: [NgIf, MatCardModule, NgTemplateOutlet],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {

  @Input() tooltipTemplate?: TemplateRef<any>;

}
