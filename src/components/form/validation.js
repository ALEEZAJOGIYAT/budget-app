import React from "react";

export const Validation = (data) => {
  let errors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is Required";
  }
  if (!data.phoneNo) {
    errors.phoneNo = "Phone no is required";
  }
  if (!data.address) {
    errors.address = "Address is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};
