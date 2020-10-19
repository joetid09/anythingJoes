import React from "react"
import { Image, Item } from 'semantic-ui-react'


export const MessageCard = ({ message }) => (
    <Item.Group>
        <Item>
            <Item.Image size="tiny" src={message.user.picture} />

            <Item.Content>
                <Item.Header as="h2">Message from: {message.user.firstName}</Item.Header>
                <Item.Meta>Received: {message.date}</Item.Meta>
                <Item.Description> {message.body}</Item.Description>
            </Item.Content>
        </Item>
    </Item.Group >
)
