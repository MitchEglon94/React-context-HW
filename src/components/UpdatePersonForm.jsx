import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PeopleContext } from "./../contexts/person.context";

const schema = yup.object().shape({
  name: yup.string().required(),
});

function UpdatePersonForm({ personId, personName }) {
  console.log(personId);
  let navigate = useNavigate();
  const { people, updatePerson } = useContext(PeopleContext);
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { errors } = formState;
  const submitFunc = (updates) => {
    console.log(updates);
    updatePerson(personId, updates);
    reset();
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" {...register("name")} />
        {errors.name && (
          <label htmlFor="name" role="alert" className="error">
            {errors.name?.message}
          </label>
        )}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UpdatePersonForm;
