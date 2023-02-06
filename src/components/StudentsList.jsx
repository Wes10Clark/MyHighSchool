import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import IndividualStudent from "./IndividualStudent";

const StudentsList = () => {
  const { students } = useContext(GlobalContext);

  return (
    <div>
      <h1 className="text-center">List of Students</h1>
      <h4 className="text-center">Number of Students: {students.length}</h4>
      {students.length > 0 ? (
        <div className="d-flex justify-content-around my-3">
          <h3>Delete Student</h3>
          <h3>Student Name</h3>
          <h3>Student Gpa</h3>
        </div>
      ) : (
        ""
      )}

      {students.map((student) => {
        return <IndividualStudent student={student} key={student.id} />;
      })}
    </div>
  );
};

export default StudentsList;
