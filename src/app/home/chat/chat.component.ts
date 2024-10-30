import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogPosition, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { delay, EMPTY, of } from 'rxjs';
import { ChatDialog } from '../chat-dialog';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';

@Component({
  selector: 'pf-chat',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  
  readonly dialog = inject(MatDialog);
  readonly opened = signal(false);
  
  private dialogRef?: MatDialogRef<ChatDialogComponent, any>;
  
  // ToDo Set up a service
  readonly title ="Dominik Dobry";
  readonly subtitle ="Agile coach";

  readonly message = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

  readonly email = 'gsr.ddobry@gmail.com';
  readonly linkedin = 'https://www.linkedin.com/in/dominik-dobry/';

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

    const data: ChatDialog = {
      message: this.message, 
      title: this.title, 
      subtitle: this.subtitle, 
      email: this.email, 
      linkedin: this.linkedin
    };

    const position: DialogPosition = { 
      bottom: '5rem', 
      right: '5rem'
    };

    this.dialogRef = this.dialog.open(ChatDialogComponent, { data });
    this.dialogRef.updatePosition(position);
    this.dialogRef.afterClosed().subscribe(() => this.opened.set(false));
  }

  closeDialog(): void {
    this.dialogRef?.close();
  }

}
