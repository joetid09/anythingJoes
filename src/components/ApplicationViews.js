import React from "react"
import { Route } from "react-router-dom"
import { Message } from "semantic-ui-react"
import { Home } from "./Home"

//Messages
import { MessageProvider } from "./Messages/MessageProvider"
import { MessagesList } from "./Messages/MessageList"
import { MessageDetail } from "./Messages/MessageDetail"
import { MessageForm } from "./Messages/MessageForm"

//Friends
import { FollowersProvider } from "./Friends/FollowersProvider"
import { FollowersList } from "./Friends/FollowersList"

//Users
import { UserProvider, UsersContext } from "./User/UserProvider"

export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>

\            <MessageProvider>
                <Route exact path="/Messages">
                    <MessagesList />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/detail/:messageId(\d+)">
                    <MessageDetail />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
            </MessageProvider>

            <FollowersProvider>
                <Route exact path="/followers">
                    <FollowersList />
                </Route>
            </FollowersProvider>
        </>
    )
}