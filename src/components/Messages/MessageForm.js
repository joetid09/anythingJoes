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
    const to = useRef(null)
    const fromUser = useRef(null)
    const body = useRef(null)

    useEffect(() => {
        getMessageById()
    }, [])

    const composeMessage = () => {

        addMessage({
            to,
            from: +localStorage.getItem("Joe_user"),
            body: body.current.value
        })
            .then(() => history.push("/MessagesList"))

    }
    const history = useHistory()

    return (
        <form className="messageForm">
            <fieldset class="toBox">
                <div className="addressBox">
                    <label>To : </label>
                    <input type="text" ref={to} name="userName" />
                </div>
            </fieldset>

            <fieldset class="messageBox">
                <label>Message:</label>
                <textarea ref={body} name="messageBody" />
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
