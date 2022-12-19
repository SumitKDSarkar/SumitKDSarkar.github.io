import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main">
        <h2 className="section__title different" data-aos="fade-right">
          Skills
        </h2>
        <div className="techsection">
          <div data-aos="fade-right">
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div data-aos="fade-right">
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div data-aos="fade-right">
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div data-aos="fade-right">
            <FaReact />
            <h5>React</h5>
          </div>
          <div data-aos="fade-right">
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div data-aos="fade-right">
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div data-aos="fade-right">
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div data-aos="fade-right">
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div data-aos="fade-right">
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div data-aos="fade-right">
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div data-aos="fade-right">
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div data-aos="fade-right">
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
