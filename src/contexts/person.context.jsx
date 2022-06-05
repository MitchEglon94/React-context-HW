import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const PeopleContext = createContext({
  people: [],
  addPerson: () => {},
  updatePerson: () => {},
  removePerson: () => {},
});

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const addPerson = (data) => {
    data._id = nanoid();
    setPeople([...people, data]);
  };

  const updatePerson = (id, updates) => {
    // Get index
    console.log(id);
    const index = people.findIndex((person) => person._id === id);
    // Get actual person
    const oldPerson = people[index];
    console.log(oldPerson);
    let newPerson = {
      ...oldPerson,
      ...updates,
    };
    console.log(newPerson);
    // recreate the people array
    const updatedPeople = [
      ...people.slice(0, index),
      newPerson,
      ...people.slice(index + 1),
    ];

    setPeople(updatedPeople);
  };
  const removePerson = (id) => {
    // Get index
    const index = people.findIndex((person) => person._id === id);

    // recreate the people array
    const updatedPeople = [
      ...people.slice(0, index),
      ...people.slice(index + 1),
    ];

    setPeople(updatedPeople);
  };

  return (
    <PeopleContext.Provider
      value={{
        people,
        addPerson,
        updatePerson,
        removePerson,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
