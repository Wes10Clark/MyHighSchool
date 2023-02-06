import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  students: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function addStudent(student) {
    dispatch({
      type: "ADD_STUDENT",
      payload: student,
    });
  }

  function clearStudents(students) {
    dispatch({
      type: "CLEAR_STUDENTS",
      payload: students,
    });
  }

  function deleteStudent(id) {
    dispatch({
      type: "DELETE_STUDENT",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        students: state.students,
        addStudent,
        clearStudents,
        deleteStudent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
