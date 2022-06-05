import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UpdatePersonForm from "../components/UpdatePersonForm";
import { PeopleContext } from "./../contexts/person.context";

function UpdatePerson() {
  const { people, updatePerson } = useContext(PeopleContext);
  const { id } = useParams();
  const index = people.findIndex((person) => person._id === id);
  const { name, _id } = people[index];

  return (
    <div>
      <h1>{name}</h1>
      <p>{_id}</p>
      UpdatePerson
      <UpdatePersonForm personId={_id} personName={name} />
    </div>
  );
}

export default UpdatePerson;
