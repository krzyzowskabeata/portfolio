import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { ChatDialog } from './chat-dialog';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatDialogUrl ='api/chatDialog';
  private http = inject(HttpClient);

  private chatDialogResult$ = this.http.get<ChatDialog>(this.chatDialogUrl)
    .pipe(
      shareReplay(1),
    );

  // Info: toSignal will automatically SUBSCRIBE AND UNSUBSCRIBE! It's possible to use initial value here :)
  private chatDialogResult = toSignal(this.chatDialogResult$);

  chatDialog = computed(() => this.chatDialogResult());

}
