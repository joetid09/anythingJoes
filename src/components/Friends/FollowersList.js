import React, { useContext, useRef, useEffect } from "react"
import { FollowersContext } from "./FollowersProvider"
import { FollowerCard } from "./FollowerCard"
import { UsersContext } from "../User/UserProvider.js"


export const FollowersList = () => {
    const { followers, getFollowers, addFollower } = useContext(FollowersContext)
    const { users, getUsers } = useContext(UsersContext)

    const activeJoe = +localStorage.getItem("Joe_user")
    const nameSearched = useRef("")



    useEffect(() => {
        getFollowers().then(getUsers)
    }, [])




    return (

        < div className="ui search" >
            <input className="prompt" ref={nameSearched} type="text" placeholder="Search Followers" />
            <div className="">
                {}
                {

                    //maps into the followers array,so that individual objects (joes and seekers) can be used
                    //matches local user to objects with a matching joesId
                    //then displays a corresponding seekers ID that is in the  same object
                    followers.map((seek, index) => {
                        if (activeJoe === seek.following) {
                            console.log(seek)
                            return <FollowerCard key={index} seek={seek.user} following={seek.id} />
                        }
                        //same function as above, only for someone logged in as seeker, and shows who they follow
                        // else if (activeSeeker === seek.seekersId && seek.seekers.typeId === 2) {
                        //     console.log(activeSeeker)
                        //     return <FollowerCard key={index} seek={seek.user} follower={seek.id} />
                        // }
                    })
                }
            </div>
        </div >
    )

}