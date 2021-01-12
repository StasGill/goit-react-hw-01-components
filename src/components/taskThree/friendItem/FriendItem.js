import React from 'react'
import PropTypes from 'prop-types';

const FriendItem = ({friend},{key}) => {
    return (
            <li className="itemm" key={key}>
                <span className={friend.isOnline? ("status-online") : ("status-offline")}></span>
                <img className="avatar" src={friend.avatar} alt="" width="48" />
                <p className="names">{friend.name}</p>
            </li>
    );
}

FriendItem.propTypes = {
    stat: PropTypes.object,
  };

export default FriendItem;