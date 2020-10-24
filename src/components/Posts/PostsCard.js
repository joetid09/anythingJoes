import React from "react"
import { Image, Item } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"



export const PostsCard = ({ post }) => {
    let history = useHistory()
    return (
        <>
            < Item.Group >
                <Item href="">
                    <Item.Content>
                        <Item.Meta><h5>{post.joes.userName}:</h5>{post.content}</Item.Meta>
                    </Item.Content>
                </Item >
            </Item.Group >
        </>
    )
}
