import React from 'react'
// import Header from './Header/Header'
// import Main from './Main/Main'
import TaskOne from './taskOne/TaskOne'
import users from './user.json'




const App = () => {
    
    return (
        <>
            <h1>Hello world</h1>
            <TaskOne user={users}/>
        </>
    );
}

export default App;