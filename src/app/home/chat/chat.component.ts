import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SubmenuDirective } from '../../shared/submenu/submenu.directive';
import { TooltipDirective } from '../../shared/tooltip/tooltip.directive';

@Component({
  selector: 'pf-chat',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatCardModule, MatIconModule, SubmenuDirective, TooltipDirective],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messages = [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
  `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
  Letraset sheets containing Lorem Ipsum passages.`];

  title ="Dominik Dobry";
  subtitle ="Scrum Master";

  email = 'gsr.ddobry@gmail.com';
  linkedin = 'https://www.linkedin.com/in/dominik-dobry/';

}
