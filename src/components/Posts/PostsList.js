import React, { useContext, useEffect } from "react"
import { PostsContext } from "./PostsProvider"
import { PostsCard } from "./PostsCard"
import { useHistory } from "react-router-dom"
import { Grid, Image, Button, Icon } from "semantic-ui-react"

export const PostList = () => {
    const { posts, getPosts, deletePost, addPosts } = useContext(PostsContext)
    const history = useHistory()
    const joeUser = +localStorage.getItem("Joe_user")

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <Grid celled>
            <Grid.Row>
                <div className="postsContainer">
                    {
                        posts.map((post, index) => {
                            if (joeUser)
                                return <PostsCard key={index} post={post} />
                        })
                    }
                </div>
            </Grid.Row>
            <Grid.Row>
                <div className="postsContainer">
                    <Button onClick={e => history.push("/newPost")}>New Post</Button>
                </div>

            </Grid.Row>
        </Grid>
    )
}