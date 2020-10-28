import React, { useContext, useState, useEffect, useRef } from "react";
import { MessagesContext } from "./MessageProvider";
import { useHistory } from 'react-router-dom';
import { FollowersContext } from "../Friends/FollowersProvider"
import { ToCard } from "./ToCard"

export const MessageForm = () => {
    //uses hooks to bring in dataProvider functions
    const { followers, getFollowers } = useContext(FollowersContext)
    const { messages, getMessageById, addMessage, getMessages } = useContext(MessagesContext)
    const activeJoe = +localStorage.getItem("Joe_user")
    var date = new Date().getTime()

    //getting messages
    useEffect(() => {
        getMessages().then(getFollowers)
    }, [])

    //creates empty boxes that will be filled when user inputs data
    const fromUser = useRef(null)
    const body = useRef(null)
    const [to, setTo] = useState()

    useEffect(() => {
        getMessages()
    }, [])

    const composeMessage = () => {

        addMessage({
            to,
            userId: +localStorage.getItem("Joe_user"),
            date: date,
            body: body.current.value
        })
            .then(() => history.push("/Messages"))

    }
    const history = useHistory()

    return (
        <form className="messageForm">
            <fieldset class="toBox">
                {/* <div className="ui selection dropdown"> */}
                {/* <input type="hidden" name="recipient" onChange={e => setTo()} */}
                <select class="ui dropdown" onChange={e => setTo(+e.currentTarget.value)}>
                    <option value="">Recipient</option>
                    {
                        followers.map((option, index) => {
                            if (activeJoe === option.following) {
                                console.log(option)
                                return <option value={option.userId}>{option.user.userName} </option>
                            }
                        })
                    }
                </select>
                {/* </div> */}
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
