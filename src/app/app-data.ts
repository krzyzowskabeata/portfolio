import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ChatDialog } from './home/chat-dialog';
import { ChatDialogData } from './home/chat-dialog-data';

export class AppData implements InMemoryDbService {

    createDb(): { chatDialog: ChatDialog} {
        const chatDialog = ChatDialogData.chatDialog;
        return { chatDialog };
    }
}
