import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiStyledcomponents,
  SiHtml5,
  SiMaterialui
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import harvest from "../img/harvest.png";
import netflix from "../img/netlify1.png";
import shop from "../img/shop.png";
import farfetch from "../img/farfetch.png"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={harvest}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Harvest Clone</h2>
              <p>
              Harvest is a time-tracking app for freelancers that includes invoicing, expensing, and team management features.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <SiHtml5 />
                <DiCss3 />
                <SiMaterialui />
                <VscJson />
                <SiStyledcomponents />
              </div>
              <div>
                <a
                  href="https://ourharvestclone.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shabazalimalik69/afraid-shoe-4639"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://pooran8898.github.io/portfolio/static/media/S.d57e2095.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Sudoku Solver</h2>
              <p>
                Sudoku Solver is a Website that gives you the Solution of Every
                Sudoko Problem that you input and also you can visualize each
                step of how the sudoku is getting solved.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiMaterialui />
                <VscJson />
              </div>
              <div>
                <a
                  href="https://csb-ks3rf.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pooran8898/Sudokosolver"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={netflix}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Netflix Clone</h2>
              <p>
              It's an OTT platform that provides TV and Movies content.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiMaterialui />
                <VscJson />
              </div>
              <div>
                <a
                  href="https://mellow-hamster-00df75.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SumitKDSarkar/divergent-quiet-5144/tree/master/src"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={farfetch}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Farfetch.com Clone</h2>
              <p>
              An e-commerce website for personal products.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://sabirafarooq.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Sab01123/mucho-angle-7709"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={shop}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>SHOP.COM Clone</h2>
              <p>
              An e-commerce website for personal products.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://stunning-gecko-ff6621.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Tarun22sharma/Shop.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
