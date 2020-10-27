import React from "react"
import { Image, Item } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"



export const MessageCard = ({ message }) => {
    let history = useHistory()
    return (
        <>
            < Item.Group >
                <Item href="">
                    <Item.Image size="tiny" src={message.joes.picture} />
                    <button onClick={() => history.push(`/messages/detail/${message.id}`)}>
                        <Item.Content>
                            <Item.Header as="h2">Message from: {message.joes.userName}</Item.Header>
                            <Item.Meta>Received: {message.date}</Item.Meta>
                            <Item.Description> {message.subject}</Item.Description>
                        </Item.Content>
                    </button>
                </Item >
            </Item.Group >
        </>
    )
}
