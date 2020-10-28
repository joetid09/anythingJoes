import React, { useState, createContext } from "react"

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

    // calls for message using id declared in function on messageCard
    const getMessageById = id => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
            .then(res => res.json())
    }

    const addMessage = newMessage => {
        return fetch("http://localhost:8088/messages?_expand=user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(getMessages)
    }
    return (
        <MessagesContext.Provider value={{
            messages, getMessages, getMessageById, addMessage
        }}>
            {props.children}
        </MessagesContext.Provider>
    )
}