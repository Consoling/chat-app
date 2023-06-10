import {Conversation, Message, User} from '@prisma/client'

export type FullMessageType = Message & {
    sendere: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[],
    messages: FullMessageType[],
}