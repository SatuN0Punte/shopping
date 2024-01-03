import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  
  // โค้ดส่วนอื่น ๆ ของคุณ...

  return (
    // JSX ของคุณ...
  );
};

export default AddProduct;
