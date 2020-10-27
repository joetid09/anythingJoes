import React from "react"
import { Route } from "react-router-dom"
import { Message } from "semantic-ui-react"

//Landing pages
import { JoeHome } from "./JoeHome"
import { SeekerHome } from "./SeekerHome"
//Messages
import { MessageProvider } from "./Messages/MessageProvider"
import { MessagesList } from "./Messages/MessageList"
import { MessageDetail } from "./Messages/MessageDetail"
import { MessageForm } from "./Messages/MessageForm"

//Friends
import { FollowersProvider } from "./Friends/FollowersProvider"
import { FollowersList } from "./Friends/FollowersList"

//Joes
import { JoeProvider } from "./JoeSearch/JoeProvider"
import { JoesList } from "./JoeSearch/JoeSearchList"

//Posts
import { PostsProvider } from "./Posts/PostsProvider"
import { PostList } from "./Posts/PostsList"
import { PostsForm } from "./Posts/PostsForm"

export const ApplicationViews = () => {
    return (
        <>
            <FollowersProvider>
                <PostsProvider>
                    <Route exact path="/joe">
                        <JoeHome />
                    </Route>
                </PostsProvider>
            </FollowersProvider>

            <FollowersProvider>
                <PostsProvider>
                    <Route exact path="/seeker">
                        <PostList />
                        <SeekerHome />
                    </Route>
                </PostsProvider>
            </FollowersProvider>

            <PostsProvider>
                <Route exact path="/newPost">
                    <PostsForm />
                </Route>
            </PostsProvider>

            <PostsProvider>
                <Route exact path="/posts/edit/:postId(\d+)">
                    <PostsForm />
                </Route>
            </PostsProvider>

            <MessageProvider>
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

            <JoeProvider>
                <Route exact path="/joes">
                    <JoesList />
                </Route>
            </JoeProvider>
        </>
    )
}