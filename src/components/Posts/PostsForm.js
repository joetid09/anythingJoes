import React, { useContext, useEffect, useRef } from "react"
import { PostsContext } from "./PostsProvider"
import { useHistory } from 'react-router-dom'

export const PostsForm = () => {
    const { posts, addPosts, getPosts } = useContext(PostsContext)

    //getting posts
    useEffect(() => {
        getPosts()
    }, [])

    //creates empty boxes that will be filled when user inputs data
    const postsBody = useRef(null)

    const createPost = () => {
        const joesId = +localStorage.getItem("Joe_user")

        addPosts({
            joesId: joesId,
            content: postsBody.current.value
        })
            .then(() => history.push("/joe"))

    }
    const history = useHistory()

    return (
        <form className="messageForm">
            <fieldset className="postBox">
                <label>What's on your mind?</label>
                <textarea ref={postsBody} name="postsBody" />
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    createPost()
                }}
                className="composeMessageButton">
                Send
                </button>

        </form >


    )
}

