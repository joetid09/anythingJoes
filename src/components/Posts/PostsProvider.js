import React, { createContext, useState } from "react"


export const PostsContext = createContext()
export const PostsProvider = (props) => {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts/?_expand=user")
            .then(res => res.json())
            .then(setPosts)
    }

    const addPosts = (newPost) => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })

    }

    const deletePost = postId => {
        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

    const getPostById = id => {
        return fetch(`http://localhost:8088/posts/${id}`)
            .then(res => res.json())
    }

    const updatePost = post => {
        return fetch(`http://localhost:8088/posts/${post.id}?_expand=user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
    }

    return (
        <PostsContext.Provider value={{
            posts, getPosts, deletePost, addPosts, updatePost, getPostById
        }}>
            {props.children}
        </PostsContext.Provider>

    )
}
