import React from "react"
import { Route } from "react-router-dom"
import { Message } from "semantic-ui-react"
import { Home } from "./Home"
import { MessageProvider } from "./Messages/MessageProvider"
import { MessagesList } from "./Messages/MessageList"
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

        </>
    )
}