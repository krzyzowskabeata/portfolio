import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { delay, EMPTY, of } from 'rxjs';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';
import { ChatService } from '../chat.service';

@Component({
  selector: 'pf-chat',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  
  private chatService = inject(ChatService);
  readonly dialog = inject(MatDialog);

  readonly chatDialog = this.chatService.chatDialog;
  readonly opened = signal(false);
  
  private dialogRef?: MatDialogRef<ChatDialogComponent, any>;

  constructor() {
    afterNextRender(() => this.initDialog());
  }

  initDialog(): void {
    of(EMPTY)
      .pipe(delay(1000))
      .subscribe(() => this.openDialog());
  }

  openDialog(): void {
    this.opened.set(true);

    this.dialogRef = this.dialog.open(ChatDialogComponent, { data: this.chatDialog });
    this.dialogRef.updatePosition({ bottom: '5rem', right: '5rem' });
    this.dialogRef.afterClosed().subscribe(() => this.opened.set(false));
  }

  closeDialog(): void {
    this.dialogRef?.close();
  }

}
