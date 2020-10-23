import React, { useContext } from "react"
import { Image, Item, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import { FollowersContext } from "./FollowersProvider"



export const FollowerCard = ({ seek, follower }) => {
    const { deleteFollower } = useContext(FollowersContext)

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
                        <Button className="removeFollow" onClick={() => {
                            deleteFollower(follower)
                                .then(() =>
                                    history.push("/followers"))
                        }}
                        >remove</Button>
                        {/* <Item.Description> Interests: {seek.interest.map((subject, index) => { return <div key={index}>👍 {subject}</div> })}</Item.Description> */}
                    </Item.Content>
                    {/* </button> */}
                </Item >
            </Item.Group >
        </>
    )
}
