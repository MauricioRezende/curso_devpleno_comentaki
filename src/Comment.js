import React from 'react'
import Time from './Time'

const Comment = ({comment}) => {
    return (
        <div>
            {comment.content} - Autor: {comment.user.name} - Timer: <Time timestamp={comment.createdAt}/>
        </div>
    )
}

export default Comment