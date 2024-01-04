import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // ทำอะไรบางอย่างกับข้อมูลที่ได้ เช่น ส่งข้อมูลไปยัง API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ช่องกรอกชื่อผลิตภัณฑ์ */}
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        id="productName"
        {...register("productName", { required: "Product name is required" })}
      />
      {errors.productName && (
        <span role="alert">{errors.productName.message}</span>
      )}

      {/* ช่องกรอกราคา */}
      <label htmlFor="productPrice">Product Price:</label>
      <input
        type="number"
        id="productPrice"
        {...register("productPrice", {
          required: "Product price is required",
          valueAsNumber: true,
        })}
      />
      {errors.productPrice && (
        <span role="alert">{errors.productPrice.message}</span>
      )}

      {/* ปุ่มส่งฟอร์ม */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
