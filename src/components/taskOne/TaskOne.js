import React from 'react';
import './style.css'



const TaskOne = ({user}) => {
  return (
    <div className="profile">
  <div className="description">
    <img
      src= {user.avatar} 
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">Name: {user.name}</p>
    <p className="tag">Tag: {user.tag}</p>
    <p className="location">Location: {user.location}</p>
  </div>

  <ul className="stats">
    <li className="statsLi">
      <span className="label">Followers: </span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li className="statsLi">
      <span className="label">Views: </span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li className="statsLi">
      <span className="label">Likes:</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

export default TaskOne;