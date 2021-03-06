import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"


export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()


    const [typeId, setTypeId] = useState([])

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/joes?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists && typeId === 1) {
                    console.log({ typeId })
                    fetch("http://localhost:8088/joes", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            username: `${firstName.current.value} ${lastName.current.value}`,
                            typeId: typeId

                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("Joe_user", createdUser.id)
                                history.push("/joe")
                            }
                        })
                }
                else if (!userExists && typeId === 1) {
                    console.log({ typeId })
                    fetch("http://localhost:8088/joes", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            username: `${firstName.current.value} ${lastName.current.value}`,
                            typeId: typeId

                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("Seeker_user", createdUser.id)
                                history.push("/seeker")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for anythingJoes</h1>
                <fieldset>
                    <label>What is your purpose?</label>
                    <input type="radio" name="typeId" value="1" onChange={e => setTypeId(1)} />
                    <label htmlFor="1">Just your average Joe here</label>
                    <input type="radio" name="typeId" value="2" onChange={e => setTypeId(2)} />
                    <label htmlFor="2">I'm seeking a Joe</label>
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>

                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main >
    )
}