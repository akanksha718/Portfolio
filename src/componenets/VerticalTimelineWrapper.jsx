import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Wrapper component to fix React 19 compatibility issues with react-vertical-timeline-component
const VerticalTimelineWrapper = ({ children }) => {
  return <VerticalTimeline>{children}</VerticalTimeline>;
};

export default VerticalTimelineWrapper;
