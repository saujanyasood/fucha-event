import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { data } from "./TimelineData";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="heading">
        <h1>Timeline</h1>
      </div>
      <VerticalTimeline>
        {data.map((game) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid white)" }}
              date={game.date}
              dateClassName="dateStyle"
              iconStyle={{
                background: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <img
                  src={game.img}
                  style={{
                    height: "70%",
                    textAlign: "center",
                  }}
                  alt="icon"
                />
              }
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ marginBottom: "8px" }}
              >
                {game.heading}
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {game.description}
              </h4>
              {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus id orci non hendrerit. Fusce eget felis ac nisi finibus.
          </p> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
