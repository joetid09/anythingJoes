import React, { useState, createContext } from "react"

export const JoesContext = createContext()

export const JoeProvider = (props) => {
    // sets state when used
    const [joes, setJoes] = useState([])

    // fetch call to gather all Joes
    const getJoes = () => {
        return fetch("http://localhost:8088/joes")
            .then(res => res.json())
            .then(setJoes)
    }

    // calls for message using id declared in function on messageCard
    const getJoesById = id => {
        return fetch(`http://localhost:8088/joes/${id}`)
            .then(res => res.json())
    }

    const addJoe = newFollow => {
        return fetch("http://localhost:8088/follows?_expand=joes&_seekers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFollow)
        })
            .then(getJoes)
    }
    return (
        <JoesContext.Provider value={{
            joes, getJoes, getJoesById, addJoe
        }}>
            {props.children}
        </JoesContext.Provider>
    )
}