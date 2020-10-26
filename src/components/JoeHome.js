import React from "react";
import { useHistory } from "react-router-dom"

export const JoeHome = () => {
    const history = useHistory()
    return (
        <>
            < div className="jumbotron border border-dark bg-info clearfix">
                <h1 className="display-4">anythingJoes</h1>
                <p className="lead text-light">Getting people in touched with Joes since 2020</p>
            </div>

            <div className="What should the people hear today?">
                <button onClick={e => history.push("/newPost")} > Post it!
                </button>
            </div>

            <div className="buttons">
                <button onClick={() => history.push("/Messages")}>messages</button>
            </div>
            <div className="buttons">
                <button onClick={() => history.push("/followers")}>followers</button>
            </div>
        </>
    )

}