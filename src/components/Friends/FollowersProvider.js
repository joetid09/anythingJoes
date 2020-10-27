import React, { createContext, useState } from "react"

//FriendContext will hold all the provider functions and hook throughout the friend component
export const FollowersContext = createContext()

export const FollowersProvider = (props) => {
    //when setFriends is called, will set state (load friends with the given info)
    const [followers, setFollowers] = useState([])

    //get follows pulls folows and allow seekers and joes to be expanded so that they can be filtered by relationships
    //on FollowersList 
    const getFollowers = () => {
        return fetch("http://localhost:8088/follows/?_expand=user")
            .then(res => res.json())
            .then(setFollowers)
    }

    const getFollowersId = id => {
        return fetch(`http://localhost:8088/follows/${id}?_expand=seeker`)
            .then(res => res.json())
    }

    const addFollower = newFollower => {
        return fetch("http://localhost:8088/follows?_expand=seekers&_expand=joes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFollower)
        })
            .then(getFollowers)
    }

    const deleteFollower = followerId => {
        return fetch(`http://localhost:8088/follows/${followerId}`, {
            method: "DELETE"
        })
            .then(getFollowers)
    }

    return (
        <FollowersContext.Provider value={{
            followers, getFollowers, getFollowers, addFollower, deleteFollower
        }}>
            {props.children}
        </FollowersContext.Provider >


    )
}