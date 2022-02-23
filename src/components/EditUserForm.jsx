import React from "react";
import { useForm } from "react-hook-form";

//Edicion usuarios
const EditUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("userName", props.currentUser.userName);

  const onSubmit = (data, e) => {
      data.id = props.currentUser.id
    props.updateUser(props.currentUser.id, data);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        {...register("name", {
          required: true,
        })}
      />
      {errors.name?.type === "required" && <div>campo requerido</div>}

      <label>Nombre de usuario</label>
      <input
        type="text"
        {...register("userName", {
          required: true,
          message: "campo requerido",
        })}
      />
      {errors.userName?.type === "required" && <div>campo requerido</div>}
      <button type="submit">Editar Usuario!</button>
    </form>
  );
};

export default EditUserForm;
