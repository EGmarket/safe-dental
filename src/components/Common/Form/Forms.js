import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("firstName")} placeholder="Your Name" />
    <select {...register("gender")}>
      <option value="female">female</option>
      <option value="male">male</option>
      <option value="other">other</option>
    </select>
    <input type="submit" />
  </form>
  );
};

export default Forms;
