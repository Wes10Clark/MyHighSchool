import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalContext";

const IndividualStudent = ({ student }) => {
  const { deleteStudent } = useContext(GlobalContext);
  return (
    <div className="d-flex justify-content-around my-3">
      <Button
        onClick={() => deleteStudent(student.id)}
        className="btn-danger ml-auto"
      >
        <FaTrash />
      </Button>
      <h3>{student.name}</h3>
      <h3>{student.gpa}</h3>
    </div>
  );
};

export default IndividualStudent;
