import React from "react";
import { useHistory } from "react-router-dom"

export const SeekerHome = () => {
    const history = useHistory()
    return (
        <>
            < div className="jumbotron border border-dark bg-info clearfix">
                <h1 className="display-4">anythingJoes</h1>
                <p className="lead text-light">Have you found a Joe today?</p>
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