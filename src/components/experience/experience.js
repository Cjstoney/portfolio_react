import React from "react";
import "./experience.css";
import Jobs from "../../jobs.json";
import { SectionHeaderComponent } from "../index";
function Experience({ className }) {
  return (
    <div className={className} id="experienceSection">
      <SectionHeaderComponent
        className="experience-header"
        headerText="Experience"
      />
      <ul className="experience-list">
        {Jobs.map((job, index) => {
          return (
            <li key={index} className="individual-job-container">
              <div className="job-title">
                {job.title} <span className="job-accent">@ {job.company}</span>
              </div>
              <div className="employment-time">
                {job.startDate} - {job.endDate}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
