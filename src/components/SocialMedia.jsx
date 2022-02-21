import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
