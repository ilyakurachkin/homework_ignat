import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import gun from './gun.jpg'
import Bradley from './Bradley.jpg'


/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserObjType
    message: MessageObjType
}
export type UserObjType = {
    avatar: string
    name: string
}
export type MessageObjType = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: Bradley, // можно менять
        name: 'Брэд',  // можно менять
    },
    message: {
        text: '— Ну а если вы предпочитаете блюда поострее, то несомненно в четверг вы были в кинотеатре Салават, где подавались на выбор Аннигиляторная Пушка и Рохо Морон... -го... Торро.\n' +
            '— Го. Моронго Торро. Некоторые об их музыку в этот вечер зубы сломали. Это уж по-честному.', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: gun, // можно менять
        name: 'Нормальный Пацан', // можно менять
    },
    message: {
        text: 'Сегодня здесь выступают две команды! Э… Э… Две команды. Похо Торро Моронго – ну, это по-испански – и Аннигиляторная Пушка – ну, это по-русски, но всё равно круто!' +
            '\n', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
