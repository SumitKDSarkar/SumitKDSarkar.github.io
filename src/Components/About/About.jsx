import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
// import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-left">
          Hi, I am <span className="about__name">Sumit Kumar Dey Sarkar</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-left">
          A passionate Full Stack Software Developer having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs / MongoDb
          and some other cool libraries and frameworks.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/SumitKDSarkar"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://skumarcbr4@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917586817282"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-kumar-dey-sarkar-09a1a0220/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1DCCKmZZaRXeRZeFVFy5z3cHHNG3XMRgB/view"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          {/* <a
            href="#"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a> */}
          <a
            href="https://www.google.com/maps/place/New+Town,+Cooch+Behar,+West+Bengal/@26.309719,89.4465101,16z/data=!3m1!4b1!4m5!3m4!1s0x39e2fc3c95426b77:0x8c84d172a4122914!8m2!3d26.3101069!4d89.4515803"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
    </>
  );
};
