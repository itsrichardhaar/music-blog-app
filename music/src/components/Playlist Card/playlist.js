import React from "react";
import "./playlist.css";

const PlaylistCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> {props.name}
        </li>
        <li>
          <strong>Genre:</strong> {props.occupation}
        </li>
        <li>
          <strong>Length:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onclick={() => props.removeFriend(props.id)} className="remove">
    </span>
  </div>
);

export default PlaylistCard;