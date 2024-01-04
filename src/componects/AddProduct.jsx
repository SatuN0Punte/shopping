import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // ให้ dispatch ไปยัง action addProduct
    dispatch(addProduct(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ช่องกรอกชื่อผลิตภัณฑ์ */}
      <label htmlFor="productName">Product Name:</label>
      <input
        type="text"
        id="productId"
        {...register("name", { required: "Product name is required" })}
      />

      {/* ช่องกรอกราคา */}
      <label htmlFor="productPrice">Product Price:</label>
      <input
        type="number"
        id="productPrice"
        {...register("price", {
          required: "Product price is required",
          valueAsNumber: true,
        })}
      />

      {/* ปุ่มส่งฟอร์ม */}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
