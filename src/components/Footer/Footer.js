import React from "react";
import SocialProfiles from "../../data/SocialProfiles";

const Footer = () => {
  return (
    <div>
      <h3>تواصل معي</h3>
      {SocialProfiles.map((profile) => {
        return <SocialProfile profile={profile}></SocialProfile>;
      })}
    </div>
  );
};
export default Footer;

const SocialProfile = (props) => {
  const { icon, link } = props.profile;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={icon} alt="" style={{ width: 20, margin: 5 }} />
    </a>
  );
};
