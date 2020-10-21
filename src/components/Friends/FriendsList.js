import React, { useState, useContext, useRef, useRe, useEffect } from "react"
import { FriendsContext } from "./FriendsProvider"
import { UsersContext } from "../User/UserProvider"
import { FriendCard } from "./FriendCard"


export const FriendsList = () => {
    const { friends, getFriends, getFriendById, addFriend } = useContext(FriendsContext)
    const { users, getUsers } = useContext(UsersContext)

    const nameSearched = useRef("")

    useEffect(() => {
        getFriends().then(getUsers)
    }, [])


    return (
        <div className="ui search">
            <input className="prompt" ref={nameSearched} type="text" placeholder="Search Friends" />
            <div className="">
                {
                    users.map(user => {
                        console.log(user)
                        return <FriendCard key={user.id} user={user} />
                    })
                }
            </div>
        </div>
    )

}