import React from "react";

const UserCard = ({ user: { name, email, location, picture } }) => {
    return (
        <div className="user" key={email}>
            <div>
                <h3>{name.first} {name.last}</h3>
            </div>
            <div>
                <img src={picture.large ? picture.large : "https://via.placeholder.com/400x400.png"} alt="userPhoto" />
            </div>
            <div>
                <span>{location.city}</span>
                <h3>{location.country}</h3>
            </div>
        </div>
    );
}

export default UserCard;