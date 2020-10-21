import React from "react";
import { useHistory } from "react-router-dom"

export const Home = () => {
    const history = useHistory()
    return (
        <>
            < div className="jumbotron border border-dark bg-info clearfix">
                <h1 className="display-4">anythingJoes</h1>
                <p className="lead text-light">Getting people in touched with Joes since 2020</p>
            </div>

            <div className="buttons">
                <button onClick={() => history.push("/Messages")}>messages</button>
            </div>
            <div className="buttons">
                <button onClick={() => history.push("/Friends")}>friends</button>
            </div>
        </>
    )

}