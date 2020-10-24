import React, { createContext, useState } from "react"


export const PostsContext = createContext()
export const PostsProvider = (props) => {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch(" http://localhost:8088/posts/?_expand=joes")
            .then(res => res.json())
            .then(setPosts)
    }

    const addPosts = (newPost) => {
        return fetch("http://localhost:8088/follows?_expand=seekers&_expand=joes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then(getPosts)
    }

    const deletePost = postId => {
        return fetch(`http://localhost:8088/follows/${postId}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

    return (
        <PostsContext.Provider value={{
            posts, getPosts, deletePost, addPosts
        }}>
            {props.children}
        </PostsContext.Provider>

    )
}
