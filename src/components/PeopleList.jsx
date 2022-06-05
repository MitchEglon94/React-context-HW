import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { PeopleContext } from "./../contexts/person.context";

function PeopleList() {
  const { people, removePerson, updatePerson } = useContext(PeopleContext);
  let navigate = useNavigate();
  if (people.length === 0) {
    return <p>No people listed</p>;
  }

  return (
    <ul>
      {people.map((person) => (
        <li key={person._id}>
          {person.name}
          <IconButton
            aria-label="delete"
            onClick={() => removePerson(person._id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`/people/edit/${person._id}`)}
          >
            <EditIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
