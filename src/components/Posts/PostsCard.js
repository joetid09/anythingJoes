import React from "react"
import { Button, Image, Item } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import "../JoeHome.css"


export const PostsCard = ({ post, poster }) => {
    let history = useHistory()

    return (
        <>
            < Item.Group >
                <Item href="">
                    <Item.Content>
                        <Item.Meta><h5>{post.user.userName}:</h5>{post.content}</Item.Meta>
                    </Item.Content>
                </Item >
            </Item.Group >
        </>
    )
}
