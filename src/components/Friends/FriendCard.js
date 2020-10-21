import React from "react"
import { Image, Item } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"



export const FriendCard = ({ user }) => {
    let history = useHistory()
    return (
        <>
            < Item.Group >
                <Item href="">
                    <Item.Image size="tiny" src={user.picture} />
                    {/* <button onClick={() => history.push(`/users/detail/${user.id}`)}> */}
                    <Item.Content>
                        <Item.Header as="h2">{user.userName}</Item.Header>
                        <Item.Meta>Name: {user.firstName} {user.lastName}</Item.Meta>
                        <Item.Description> Interests: {user.interest.map((subject, index) => { return <div key={index}>👍 {subject}</div> })}</Item.Description>
                    </Item.Content>
                    {/* </button> */}
                </Item >
            </Item.Group >
        </>
    )
}
