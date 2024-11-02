import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ElementToScroll } from '../../core/element-to-scroll';
import { ChatDialog } from '../chat-dialog';

@Component({
  selector: 'pf-chat-dialog',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatDialogModule, MatIconModule],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDialogComponent {

  readonly data = inject<Signal<ChatDialog | undefined>>(MAT_DIALOG_DATA);
  readonly elementToScroll = ElementToScroll; // ToDo As data?

}
