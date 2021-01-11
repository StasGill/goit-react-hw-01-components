import React from 'react'
import TaskOne from './taskOne/TaskOne'
import TaskTwo from './taskTwo/TaskTwo'
import TaskThree from './taskThree/TaskThree'
import TaskFour from './taskFour/TaskFour'
import users from './user.json'
import statistic from './statistic.json'
import friends from './friends.json'
import transactions from './transaction.json'






const App = () => {
    
    return (
        <>
            
            <TaskOne user={users}/>
            <TaskTwo statistic={statistic}/>
            <TaskThree friends={friends}/>
            <TaskFour transactions={transactions}/>
        </>
    );
}

export default App;