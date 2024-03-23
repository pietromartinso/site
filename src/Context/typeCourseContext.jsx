import React, { createContext, useState, useContext } from "react";

const TypeCourseContext = createContext();

export function useTypeCourse() {
  return useContext(TypeCourseContext);
}

export default function TypeCourseContextProvider({ children }) {
  const [type, setType] = useState();

  function typeSelected(type) {
    setType(type)
  }

  return (
    <TypeCourseContext.Provider value={{ setType, type, typeSelected }}>
      {children}
    </TypeCourseContext.Provider>
  );
}
