import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatButtonModule, 
  MatCardModule, 
  MatIconModule
];

@Component({
  selector: 'pf-container',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, ...modules],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  @Input() template?: TemplateRef<any>;

}
