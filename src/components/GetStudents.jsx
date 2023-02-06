import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";

const GetStudents = () => {
  const [name, setName] = useState("");
  const [gpa, setGpa] = useState("");
  const { addStudent } = useContext(GlobalContext);
  const { clearStudents } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Math.floor(Math.random() * 100000000),
      name,
      gpa,
    };
    addStudent(newStudent);
    setName("");
    setGpa("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-around">
          <FormGroup>
            <FormLabel>Please Enter the Student`s Name</FormLabel>
            <FormControl
              placeholder="please enter student name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Please Enter the Student`s GPA</FormLabel>
            <FormControl
              placeholder="please enter student GPA"
              type="number"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
            ></FormControl>
          </FormGroup>
        </div>
        <div className="d-flex justify-content-around">
          <Button type="submit" className="btn-danger my-3">
            Add Student
          </Button>
          <Button onClick={clearStudents} className="btn-danger my-3">
            Clear Students
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default GetStudents;
