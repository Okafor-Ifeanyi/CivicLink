import React from "react";
import imageF from "../assets/d0741e7f8e8c89079a86f56c4f156416.jpeg"

interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  data: Record<string, string>; // expects 3 key-value pairs
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, title, data }) => {
  return (
    <div className="profile-card">
        <div className="drs">
            <img src={imageF} alt={name} className="profile-card__image" />
            <div className="name-details">
                <h2 className="profile-card__name">{name}</h2>
                <p className="profile-card__title">{title}</p>
                <div className="profile-card__data">
                    {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="profile-card__row">
                        <span className="profile-card__key">{key}:</span>
                        <span className="profile-card__value">{value}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
       
        <button className="view-contact">View Contact</button>
    </div>
  );
};

export default ProfileCard;