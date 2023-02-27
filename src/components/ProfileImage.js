import React from "react";

const ProfileImage = (props) => {
  return (
    <div>
      <img className="profile" src={props.image} alt="profile" />
    </div>
  );
};

export default ProfileImage;
