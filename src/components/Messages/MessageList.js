import React, { useContext, useEffect } from "react"
import { MessagesContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useHistory } from "react-router-dom"

export const MessagesList = () => {
    const { messages, getMessages } = useContext(MessagesContext)

    useEffect(() => {
        getMessages()
    }, [])

    const history = useHistory()
    return (

        <>
            <div className="messageContainer">
                <h2>Messages</h2>
                {

                    messages.map(message => {
                        return <MessageCard key={message.id} user={message.user.firstName} message={message} />
                    })
                }
            </div>
        </>
    )
}