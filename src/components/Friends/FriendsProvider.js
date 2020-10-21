import React, { createContext, useState } from "react"

//FriendContext will hold all the provider functions and hook throughout the friend component
export const FriendsContext = createContext()

export const FriendsProvider = (props) => {
    //when setFriends is called, will set state (load friends with the given info)
    const [friends, setFriends] = useState()

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
            .then(res => res.json())
            .then(setFriends)
    }

    const getFriendById = id => {
        return fetch(`http://localhost:8088/friends/${id}?_expand=user`)
            .then(res => res.json())
    }

    const addFriend = newFriend => {
        return fetch("http://localhost:8088/friends?_expand=user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriend)
        })
            .then(getFriends)
    }
    return (
        <FriendsContext.Provider value={{
            friends, getFriends, getFriendById, addFriend
        }}>
            {props.children}
        </FriendsContext.Provider >


    )
}