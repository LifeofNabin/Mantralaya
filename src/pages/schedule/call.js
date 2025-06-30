import React from 'react';
import './call.css'; // Fixed import syntax

function Schedule() {
  return (
    <div className="schedule-container">
      <h1>Schedule Your Meeting</h1>
      <div className="calendar-embed">
        <iframe
          src="https://calendly.com/dhamala-nabin1"
          width="100%"
          height="650"
          frameBorder="0"
          title="Schedule a Call"
        ></iframe>
      </div>
      <div> We will guide you through our process </div>
    </div>
  );
}

export default Schedule;