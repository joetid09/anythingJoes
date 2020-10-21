import React, { useState, createContext } from "react"

export const UsersContext = createContext()

export const UserProvider = (props) => {
    // sets state when used
    const [users, setUsers] = useState([])

    // fetch call to gather all messages
    const getUsers = () => {
        return fetch("http://localhost:8088/users?_expand=interests")
            .then(res => res.json())
            .then(setUsers)
    }


    return (
        <UsersContext.Provider value={{
            users, getUsers
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}