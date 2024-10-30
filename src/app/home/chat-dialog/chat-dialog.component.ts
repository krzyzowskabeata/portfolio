import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ChatDialog } from '../chat-dialog';

@Component({
  selector: 'pf-chat-dialog',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatIconModule],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDialogComponent {

  readonly data = inject<ChatDialog>(MAT_DIALOG_DATA);

}
