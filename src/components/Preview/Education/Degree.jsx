import React from "react";
import { formatDate } from "../../../utils/formatDate";

const Degree = ({ degree }) => {
  const { school, title, startDate, endDate, description } = degree;

  const formattedDate = `${startDate ? formatDate(startDate) : ""} - ${
    endDate ? formatDate(endDate) : ""
  }`;

  return (
    <div className="pt-4 pb-2 border-b-2">
      <h1 className="text-lg font-bold">{school}</h1>
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-sm font-medium pt-2">{formattedDate}</p>
      <p className="text-sm italic pt-2">{description}</p>
    </div>
  );
};

export default Degree;
