import React, { useContext } from "react"
import { Image, Item, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import { JoesContext } from "./JoeProvider"



export const JoeCard = ({ joe }) => {
    const { addJoe } = useContext(JoesContext)
    let history = useHistory()

    const CreateFollowing = ({ joe }) => {
        addJoe({
            userId: +joe.id,
            following: +localStorage.getItem("Joe_user")
        })
    }
    return (
        <>
            < Item.Group >
                <Item href="">
                    <Item.Image size="tiny" src={joe.picture} />
                    {/* <button onClick={() => history.push(`/users/detail/${user.id}`)}> */}
                    <Item.Content>
                        <Item.Header as="h2">{joe.userName}</Item.Header>
                        <Item.Meta>Name: {joe.firstName} {joe.lastName}</Item.Meta>
                        <Button className="removeFollow" onClick={() => {
                            CreateFollowing({ joe })
                        }}
                        >add</Button>
                        {/* <Item.Description> Interests: {seek.interest.map((subject, index) => { return <div key={index}>👍 {subject}</div> })}</Item.Description> */}
                    </Item.Content>
                    {/* </button> */}
                </Item >
            </Item.Group >
        </>
    )
}