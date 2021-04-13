import react, { useState, useEffect} from 'react'
import './App.css';
import firebase from './firebase'

const useDataBase = endpoint => {
    const ref = firebase.database().ref(endpoint)
    const [data, setDate] = useState({})
  
    useEffect(() => {
        ref.on('value', snapshot => {
            console.log(snapshot.val())
            setDate(snapshot.val())
        })
        return () => {
            ref.off()
        }
    }, [endpoint])
    return data
}

const useDatabasePush = endpoint => {
    const [status, setStatus] = useState('')

    const save = data => {
        const ref = firebase.database().ref(endpoint)
        ref.push(data, err => {
            if(err){
                setStatus('ERROR')
            }else{
                setStatus('SUCCESS')
            }
        })
    }

    return [status, save]
}

const Comment = (props) => {
    return (
        <div>
            {props.comment.content} - Autor: {props.comment.user.name}
        </div>
    )
}

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

function App() {  
    const [status, save] = useDatabasePush('comments')
    
    return (
        <div>
            <button 
                onClick={() => {
                    save({
                        content:'Primeiro comentário',
                        user: {
                            id: '1',
                            name: 'Mauricio'
                        }
                    })
                }}
            >Toggle</button>

            Status: {status}

            <Comments />
        </div>
    );
}

export default App;
