import React, {useState, useEffect} from 'react'
import firebase from './firebase'

export const useDatabasePush = endpoint => {
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

export const useDataBase = endpoint => {
    const ref = firebase.database().ref(endpoint)
    const [data, setDate] = useState({})
  
    useEffect(() => {
        ref.on('value', snapshot => {
            setDate(snapshot.val())
        })
        return () => {
            ref.off()
        }
    }, [endpoint])

    return data
}