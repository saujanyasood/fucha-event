import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline" style={{height: "800px"}}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white" }}
          date="1:06 to 1:10"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">Hema is Dumb</h2>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          {/* <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1:10"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h2 className="vertical-timeline-element-title">
            Hema learns how to use wacky
          </h2>
          {/* <h4 className="vertical-timeline-element-subtitle"> */}
          {/* San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1:11"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Hema learns how to use bitch
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1:15"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Hema insults soju like always{" "}
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="9:34"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Hema is suddenly cool, he's now a bitch.
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
