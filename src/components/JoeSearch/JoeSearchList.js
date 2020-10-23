import React, { useState, useContext, useRef, useEffect } from "react"
import { JoesContext } from "./JoeProvider"
import { JoeCard } from "./JoeCard"


export const JoesList = () => {
    const { joes, getJoes, getJoesById, addFollow } = useContext(JoesContext)
    const activeSeeker = +localStorage.getItem("Seeker_user")
    const nameSearched = useRef("")



    useEffect(() => {
        getJoes()
    }, [])


    return (

        < div className="ui search" >
            <input className="prompt" ref={nameSearched} type="text" placeholder="Search Followers" />
            <div className="">
                {console.log(joes)}
                {

                    //maps into the followers array,so that individual objects (joes and seekers) can be used
                    //matches local user to objects with a matching joesId
                    //then displays a corresponding seekers ID that is in the  same object
                    joes.map((joe, index) => {
                        //same function as above, only for someone logged in as seeker, and shows who they follow
                        if (activeSeeker) {
                            console.log(activeSeeker)
                            return <JoeCard key={index} joe={joe} />
                        }
                    })
                }
            </div>
        </div >
    )

}