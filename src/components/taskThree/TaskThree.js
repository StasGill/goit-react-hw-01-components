import React from 'react'
import FriendItem from './friendItem/FriendItem'


const TaskThree = ({friends}) => {
    
    return (
        <ul className="friend-list">
            {
                friends.map( friend => <FriendItem friend={friend}/>) 
            }
        </ul>
    );
}

export default TaskThree;