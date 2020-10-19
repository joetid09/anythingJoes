import React, { useContext, useEffect, useState } from "react"
import { MessagesContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"

export const MessageDetail = () => {
    const { deleteMessage, getMessageById } = useContext(MessagesContext)

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
        <section className="animal">
            <h3> From: {user.firstName} {user.lastName}</h3>
            <p>{message.body}</p>
        </section>
    )
}