import React, { useState } from 'react'
import { useDatabasePush } from './database'
import firebase from './firebase'

const NewComment = props => {
    const [status, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')

    const createComment = () => {
        if(comment !== ''){
            save({
                content: comment,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: '1',
                    name: 'Mauricio'
                }
            })
            setComment('')
        }
    }
    return (
        <div>
            <br />
            <textarea value={comment} onChange={evt => setComment(evt.target.value)}/>
            <br />
            {comment}
            <br />
            <button onClick={createComment} >Toggle</button>
        </div>
    )
}

export default NewComment