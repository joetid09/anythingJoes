import React, { useState } from "react"



export const ToCard = ({ recipient }) => {

    const [to, setTo] = useState()

    return (
        <>
            <option value={recipient.userId} onClick={e => setTo(recipient.userId)}>{recipient.firstName}</option>
        </>
    )
}
