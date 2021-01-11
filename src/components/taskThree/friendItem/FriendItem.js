import React from 'react'

const FriendItem = ({friend}) => {
    return (
            <li className="itemm" id={friend.id}>
                <span className={friend.isOnline? ("status-online") : ("status-offline")}></span>
                <img className="avatar" src={friend.avatar} alt="" width="48" />
                <p className="names">{friend.name}</p>
            </li>
    );
}

export default FriendItem;