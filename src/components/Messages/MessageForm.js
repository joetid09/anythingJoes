import React, { useContext, useState, useEffect, useRef } from "react";
import { MessagesContext } from "./MessageProvider";
import { useHistory, useParams } from 'react-router-dom';

export const MessageForm = () => {
    //uses hooks to bring in dataProvider functions
    const { messages, getMessageById, addMessage, getMessages } = useContext(MessagesContext)

    //getting messages
    useEffect(() => {
        getMessages()
    }, [])

    //creates empty boxes that will be filled when user inputs data
    const toUser = useRef(null)
    const messageBody = useRef(null)
    const fromUser = useRef(null)

    useEffect(() => {
        getMessageById()
    }, [])

    const composeMessage = () => {
        const toUserId = parseInt(toUser.current.value)
        const fromUserId = parseInt(localStorage.value)
        const dateTime = new Date()

        addMessage({
            toUserId,
            fromUserId,
            messageBody: messageBody.current.value,
            sent: dateTime.toUTCString()
        })
            .then(() => history.push("/MessagesList"))

    }
    const history = useHistory()

    return (
        <form className="messageForm">
            <fieldset class="toBox">
                <div className="addressBox">
                    <label>To : </label>
                    <input type="text" ref={toUser} name="userName" />
                </div>
            </fieldset>

            <fieldset class="messageBox">
                <label>Message:</label>
                <textarea ref={messageBody} name="messageBody" />
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    composeMessage()
                }}
                className="composeMessageButton">
                Send
                </button>

        </form >


    )
}
