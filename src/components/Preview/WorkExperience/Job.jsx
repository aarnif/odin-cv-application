import React from "react";
import { formatDate } from "../../../utils/formatDate";

const Job = ({ job }) => {
  const { company, position, startDate, endDate, description } = job;

  const formattedDate = `${startDate ? formatDate(startDate) : ""} - ${
    endDate ? formatDate(endDate) : ""
  }`;

  return (
    <div className="pt-5 pb-2 border-b-2">
      <h1 className="text-2xl">{company}</h1>
      <h2 className="text-xl pt-2">{position}</h2>
      <p className="text-sm pt-2">{formattedDate}</p>
      <p className="text-l pt-2 italic">{description}</p>
    </div>
  );
};

export default Job;