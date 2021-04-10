import react, { useState, useEffect} from 'react'
import './App.css';
import firebase from './firebase'

const Comments = () => {
  const ref = firebase.database().ref('test')
  const [data, setDate] = useState({})
  
  useEffect(() => {
    ref.on('value', snapshot => {
      console.log(snapshot.val())
      setDate(snapshot.val())
    })
    return () => {
      ref.off()
    }
  }, [])
  return (
    <pre>{JSON.stringify(data)}</pre>
  )
}

function App() {  
  const [visible, toggle] = useState(true)
  
  return (
    <div>
      <button onClick={() => toggle(!visible)}>Toggle</button>
      { visible && <Comments />}
    </div>
  );
}

export default App;
