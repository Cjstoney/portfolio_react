import React from "react";
import "./experience.css";
import Jobs from "../../jobs.json";

function Experience({ className }) {
  return (
    <ul className={className}>
      {Jobs.map((job, index) => {
        return (
          <li key={index} className="individual-job-container">
            <div className="job-title">
              {job.title} <span>@ {job.company}</span>
            </div>
            <div className="employment-time">
              {job.startDate} - {job.endDate}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Experience;
