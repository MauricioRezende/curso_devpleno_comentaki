import react from 'react'

import NewComment from './NewComment'
import Comments from './Comments'

/*
firebase
    .auth()
    .createUserWithEmailAndPassword('lmauricio-2010@hotmail.com','123456')
    
firebase
    .auth()
    .onAuthStateChanged(user => {
        if(user){
            console.log(user.displayName)
            user.updateProfile({displayName: 'José Mauricio'})            
        }
    })
*/

function App() {
    return (
        <div>
            <NewComment />
            <Comments />
        </div>
    );
}

export default App;
