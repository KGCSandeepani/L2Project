export class ChatMessage {
    $key?: string;
    receiver?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date();
    senderReceiver:string;
}
