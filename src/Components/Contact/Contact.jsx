import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-left">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-left">
          <a
            href="https://www.linkedin.com/in/sumit-kumar-dey-sarkar-09a1a0220/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/SumitKDSarkar"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:skumarcbr4@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {/* <button onClick={() => window.location = 'mailto:yourmail@domain.com'}></button> */}
            <CgMail className="email" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter" />
          </a>
          <a href="tel:+917586817282" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
      </div>
    </>
  );
};
