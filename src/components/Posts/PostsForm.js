import React, { useContext, useEffect, useRef, useState } from "react"
import { PostsContext } from "./PostsProvider"
import { useHistory, useParams } from 'react-router-dom'

export const PostsForm = () => {
    const { addPosts, updatePost, getPostById } = useContext(PostsContext)
    //creates empty boxes that will be filled when user inputs data
    const [post, setPost] = useState({})
    //keeps button from being active until data received
    const [isLoading, setIsLoading] = useState(true);

    const { postId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        //creating copy of post before resetting state
        const newPost = { ...post }
        //take new copy and add new value 
        newPost[event.target.name] = event.target.value

    }

    //getting posts
    useEffect(() => {
        if (postId) {
            getPostById(postId)
                .then(post => {
                    setPost(post)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    const postsBody = useRef(null)
    const createPost = () => {
        const joesId = +localStorage.getItem("Joe_user")
        setIsLoading(true)
        if (postId) {
            updatePost({
                id: post.id,
                content: postsBody.current.value,
                joesId: joesId
            }).then(() => history.push("/joe"))
        } else {
            addPosts({
                id: joesId,
                content: postsBody.current.value,
                joesId: joesId
            })
                .then(() => history.push("/joe"))

        }
    }

    return (
        <form className="messageForm">
            <fieldset className="postBox">
                <label>What's on your mind?</label>
                <textarea
                    ref={postsBody}
                    name="postsBody"
                    onChange={handleControlledInputChange} />
            </fieldset>
            <button type="submit"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    createPost()
                }}
                className="composeMessageButton">
                {postId ? <> Save Post</> : <>Add Post</>}
            </button>


        </form >


    )
}

