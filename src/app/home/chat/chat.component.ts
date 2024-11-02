import { afterNextRender, ChangeDetectionStrategy, Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { delay, EMPTY, of } from 'rxjs';
import { ElementToScroll } from '../../core/element-to-scroll';
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

  @Output() scrollToEvent = new EventEmitter<ElementToScroll>();
  
  private chatService = inject(ChatService);
  readonly dialog = inject(MatDialog);

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

    this.dialogRef = this.dialog.open(ChatDialogComponent, { data: this.chatService.chatDialog });
    this.dialogRef.updatePosition({ bottom: '5rem', right: '5rem' });
    this.dialogRef.afterClosed().subscribe(scrollableElement => {
      this.opened.set(false);
      this.scrollToEvent.emit(scrollableElement);
    });
  }

  closeDialog(): void {
    this.dialogRef?.close();
  }

}
