import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-left">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          {/* <VerticalTimelineElement
            date={"July 2021 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }} */}
            {/* // contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            // iconStyle={{ */}
            {/* //   backgroundColor: `var(--clr-bg)`,
            //   color: `var(--clr-primary)`
            // }}
            // icon={<WorkIcon />}
          // > */}
            {/* <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Instructional Associate
            </h3> */}
            {/* <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Masai School
            </h4>
            <p data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              ipsa?
            </p> */}
          {/* // </VerticalTimelineElement> */}
          <VerticalTimelineElement
            date={"December 2022 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-left"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-left"
            >
              Masai School
            </h4>
            <p data-aos="fade-left">
              Joined MERN Stack Developer Bootcamp to learn Software Development
              and Data Structures
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2016 - Aug 2019"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-left"
            >
              Bachelor in Computer application
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-left"
            >
              Techno India University, Kolkata
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"May 2016"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-left"
            >
              Completed Higher Secondary Education
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-left"
            >
              {" "}
              Vivekananda Vidya pith High School, Cooch Behar
            </h4>
            {/* <p data-aos="fade-right">Secured 70%</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Jun 2014"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-left"
            >
              Completed Secondary Education
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-left"
            >
              Vivekananda Vidya pith High School, Cooch Behar
            </h4>
            {/* <p data-aos="fade-right">Secured 78%</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
