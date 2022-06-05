import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PeopleContext } from "./../contexts/person.context";

const schema = yup.object().shape({
  name: yup.string().required(),
});

function PersonForm() {
  let navigate = useNavigate();
  const { people, addPerson } = useContext(PeopleContext);
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { isDirty, isValid, isSubmitting, errors } = formState;
  const submitFn = (data) => {
    console.log(data);
    addPerson(data);
    reset();
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(submitFn)}>
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

export default PersonForm;
