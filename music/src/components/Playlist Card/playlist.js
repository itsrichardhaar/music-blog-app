import React from "react";
import "./playlist.css";

const PlaylistCard = props => (
  <div className="card">
    <div className="img-container">
      <strong>Name:</strong> {props.name}
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Specials:</strong> {props.location}
        </li>
        <li>
          <strong>Entertainment:</strong> {props.location}
        </li>
        <li>
          <strong>Attendance:</strong> {props.name}
        </li>
      </ul>
    </div>
    <span onclick={() => props.removeFriend(props.id)} className="remove">
    </span>
  </div>
);

export default PlaylistCard;