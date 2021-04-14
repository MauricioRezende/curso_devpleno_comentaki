import React from 'react'
import { useDataBase } from './database'
import Comment from './Comment'

const Comments = () => {
    const data = useDataBase('comments')

    if(!data){
        return (<pre>Nenhum comentário.</pre>)
    }

    const ids = Object.keys(data)

    if(ids.length === 0){
        return ( <p>Carregando...</p>)
    }
    
    return ids.map(id => {
        return <Comment key={id} comment={data[id]} />
    })
}

export default Comments