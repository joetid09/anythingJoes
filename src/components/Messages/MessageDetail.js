import React, { useContext, useEffect, useState } from "react"
import { MessagesContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"

export const MessageDetail = () => {
    const { messages, deleteMessage, getMessageById, getMessages } = useContext(MessagesContext)

    const [message, setMessage] = useState({})
    const [user, setUser] = useState({})

    const { messageId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getMessageById(messageId)
            .then((response) => {
                setMessage(response)
                setUser(response.user)
            })
    }, [])

    return (
        <section className="message">
            {
                messages.map(message => {
                    return <div>{message.body}</div>
                })
            }

        </section>
    )
}