import React from "react";
import { useHistory } from "react-router-dom"
import { Grid, Image, Button, Icon } from "semantic-ui-react"
import { PostList } from "./Posts/PostsList"
import "./JoeHome.css"

export const JoeHome = () => {
    const history = useHistory()
    return (
        <>
            <div className="ui padded grid wholePage">
                <div className="row banner">
                    < div>
                        <h1>anythingJoes</h1>
                        <p>Getting people in touched with Joes since 2020</p>
                    </div>
                </div>
                <div className="column nine wide aboutMe">
                    <div className="ui card centered">
                        <img class="ui medium image" src="https://thejewishlady.com/wp-content/uploads/2018/11/Hero-Portrait-jeff.jpg" />
                    </div>
                    <div class="content">
                        <a class="header">UserName</a>
                        <div class="meta">
                            <span class="type">Joe User</span>
                        </div>
                        <div class="description">
                            insert "About Me info" and edit buttons
                        </div>
                    </div>
                </div>
                <div className="column seven wide convoButton">
                    <div className="row messages">
                        {
                            <PostList />
                        }
                    </div>
                    <div className="row">
                        <div className="buttons">
                            <button onClick={e => history.push("/newPost")} > Post it!</button>
                            <button onClick={() => history.push("/Messages")}>messages</button>
                            <button onClick={() => history.push("/followers")}>followers</button>
                        </div>
                    </div>
                </div>
                <div className="ui row medium images spaced centered media">
                    <img class="ui bordered image" src="https://snapcreek.com/wp-content/uploads/blog-large-site-dinosaur.jpg" />
                    <img class="ui bordered image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSILAadWDM0j1drJX677QSJlUq9tnKS9V1hBw&usqp=CAU" />
                    <img class="ui bordered image" src="https://i.insider.com/5de2bba479d7577cd722e553?width=750&format=jpeg&auto=webp" />
                </div>
            </div>
        </>
    )

}