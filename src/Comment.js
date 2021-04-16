import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment = ({comment}) => {
    const auth = useContext(AuthContext)

    return (
        <div>
            {JSON.stringify(auth)}
            {comment.content} - Autor: {comment.user.name} - Timer: <Time timestamp={comment.createdAt}/>
        </div>
    )
}

export default Comment