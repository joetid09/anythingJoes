import React, { useContext, useEffect } from "react"
import { PostsContext } from "./PostsProvider"
import { PostsCard } from "./PostsCard"
import { useHistory } from "react-router-dom"
import { Grid, Image, Button, Icon } from "semantic-ui-react"

export const PostList = () => {
    const { posts, getPosts, deletePost, addPosts } = useContext(PostsContext)
    const history = useHistory()
    const joeUser = +localStorage.getItem("Joe_user")
    const seekerUser = +localStorage.getItem("Seeker_user")

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <Grid celled>
            <Grid.Row>
                <div className="postsContainer">
                    {
                        posts.map((post, index) => {
                            if (joeUser && joeUser === post.user.id) {
                                return (<Grid.Row>
                                    <PostsCard key={index} post={post} poster={joeUser}
                                    />
                                    <Button onClick={e => deletePost(post.id)}>delete</Button>
                                    <Button onClick={() => {
                                        history.push(`/posts/edit/${post.id}`)
                                    }}>Edit</Button>
                                </Grid.Row>)

                            } else {
                                return (<Grid.Row>
                                    <PostsCard key={index} post={post} poster={joeUser} />
                                </Grid.Row>)

                            }
                        })
                    }

                </div>
            </Grid.Row>
        </Grid>

    )
}