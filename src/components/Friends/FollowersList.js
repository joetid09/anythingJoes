import React, { useState, useContext, useRef, useEffect } from "react"
import { FollowersContext } from "./FollowersProvider"
import { UsersContext } from "../User/UserProvider"
import { FollowerCard } from "./FollowerCard"


export const FollowersList = () => {
    const { followers, getFollowers, addFollower } = useContext(FollowersContext)
    const activeJoe = +localStorage.getItem("Joe_user")
    const activeSeeker = +localStorage.getItem("Seeker_user")
    const nameSearched = useRef("")
    const seekers = followers.map(seek => seek.seekers)



    useEffect(() => {
        getFollowers()
    }, [])


    return (

        < div className="ui search" >
            <input className="prompt" ref={nameSearched} type="text" placeholder="Search Followers" />
            <div className="">
                {console.log(followers.map)}
                {

                    followers.map((seek, index) => {
                        if (activeJoe === seek.joesId && seek.joes.typeId === 1) {
                            return <FollowerCard key={index} seek={seek.seekers} />
                        }
                        else if (activeSeeker === seek.seekersId && seek.seekers.typeId === 2) {
                            console.log(activeSeeker)
                            return <FollowerCard key={index} seek={seek.joes} />
                        }
                    })
                }
            </div>
        </div >
    )

}