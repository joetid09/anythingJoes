import React from "react"
import { Image, Item } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"



export const FollowerCard = ({ seek }) => {
    let history = useHistory()
    return (
        <>
            < Item.Group >
                <Item href="">
                    <Item.Image size="tiny" src={seek.picture} />
                    {/* <button onClick={() => history.push(`/users/detail/${user.id}`)}> */}
                    <Item.Content>
                        <Item.Header as="h2">{seek.userName}</Item.Header>
                        <Item.Meta>Name: {seek.firstName} {seek.lastName}</Item.Meta>
                        {/* <Item.Description> Interests: {seek.interest.map((subject, index) => { return <div key={index}>👍 {subject}</div> })}</Item.Description> */}
                    </Item.Content>
                    {/* </button> */}
                </Item >
            </Item.Group >
        </>
    )
}
