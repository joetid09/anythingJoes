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

    return (
        <MessagesContext.Provider value={{
            messages, getMessages
        }}>
            {props.children}
        </MessagesContext.Provider>
    )
}