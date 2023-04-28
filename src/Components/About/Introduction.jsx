import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import avatar from "../img/IMG_12jpg.jpg"
import avatar from "../img/Sumit_IMG.jpg"

export const Introduction = () => {
  return (
    <>
      {/* <section id="#about"> */}
        {/* <div className="section" data-aos="fade-right"> */}
          {/* <h2 className="section__title">
            About <span className="different">Me</span>
          </h2> */}
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img
                src={avatar}
                alt="Images"
              />
            </div>
            {/* <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Sumit Kumar Dey Sarkar</span> from{" "}
                <span className="different"> Cooch Behar, West Bengal</span>. I have
                completed my graduation in Computer Appllication from
                Thechno India University, Kolkata.
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Riding Bikes{" "}
              </h4> */}


              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Solving Problems{" "}
              </h4> */}
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning Algorithms{" "}
              </h4> */}

{/*               
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Listening to Music{" "}
              </h4> */}
            {/* </div> */}
          </div>
        {/* </div> */}
      {/* </section> */}
    </>
  );
};
