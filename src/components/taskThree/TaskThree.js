import React from 'react'
import FriendItem from './friendItem/FriendItem'
import './taskThreeStyle.css'


const TaskThree = ({friends}) => {
    
    return (
        <ul className="friend-list">
            {
                friends.map( friend => <FriendItem friend={friend} key={friend.id}/>) 
            }
        </ul>
    );
}

export default TaskThree;