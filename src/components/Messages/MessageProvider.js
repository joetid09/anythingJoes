import React, { useState, createContext } from "react"
import { MessageContent } from "semantic-ui-react"

export const MessagesContext = createContext()

export const MessageProvider = (props) => {
    // sets state when used
    const [messages, setMessages] = useState([])

    // fetch call to gather all messages
    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = id => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
            .then(res => res.json())
    }

    return (
        <MessagesContext.Provider value={{
            messages, getMessages, getMessageById
        }}>
            {props.children}
        </MessagesContext.Provider>
    )
}