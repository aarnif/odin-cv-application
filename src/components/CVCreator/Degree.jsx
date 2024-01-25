import React from "react";

const Degree = ({ index, id, degree, handleEducationChange, deleteDegree }) => {
  return (
    <>
      <h2 className="text-xl pt-5">Degree {index}</h2>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>School:</label>
            <input
              className="border-2 border-black"
              name="school"
              type="text"
              placeholder="School name"
              value={degree.school}
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Degree:</label>
            <input
              className="border-2 border-black"
              name="title"
              type="text"
              placeholder="Degree title"
              value={degree.title}
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Start date:</label>
            <input
              className="border-2 border-black"
              name="startDate"
              type="date"
              placeholder="Start date"
              value={degree.startDate}
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>End date:</label>
            <input
              className="border-2 border-black"
              name="endDate"
              type="date"
              placeholder="End date"
              value={degree.endDate}
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Description:</label>
            <textarea
              className="border-2 border-black"
              name="description"
              type="text"
              placeholder="A job description."
              value={degree.description}
              onChange={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <button
              className="border-2 border-black m-5 px-6 py-2"
              onClick={deleteDegree}
            >
              Delete
            </button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Degree;