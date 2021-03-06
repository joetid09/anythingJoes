import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import 'semantic-ui-css/semantic.min.css'


export const AnythingJoes = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("Joe_user")) {
                return (
                    <>

                        <ApplicationViews />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)