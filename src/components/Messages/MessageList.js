import React, { useContext, useEffect } from "react"
import { MessagesContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useHistory } from "react-router-dom"
import { Grid, Image, Button, Icon } from "semantic-ui-react"

export const MessagesList = () => {
    const { messages, getMessages } = useContext(MessagesContext)
    const activeUser = +localStorage.getItem("Joe_user")
    useEffect(() => {
        getMessages()
    }, [])

    const history = useHistory()
    return (
        <>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Button animated>
                            <Button.Content visible>
                                <Icon name='pencil' />
                            </Button.Content>
                            <Button.Content hidden>
                                Compose
                            </Button.Content>

                        </Button>
                    </Grid.Column>

                    <div className="messageContainer">

                        <h2>Messages</h2>
                        {
                            messages.sort().filter(message => message.joesId === activeUser)
                                .map(message => {
                                    return <MessageCard key={message.id} user={message.joes.firstName} message={message} />
                                })
                        }
                    </div>

                </Grid.Row>
            </Grid>
        </>
    )
}