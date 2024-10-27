import * as yup from "yup";

const emailValidation = yup
  .string()
  .email("Invalid email")
  .required("Email is required")
  .test("exist", "You need to provide a valid email", (value) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  });

export const bookingUserInfoValidation = yup.object({
  lastName: yup.string().required("Last Name is required"),
  firstName: yup.string().required("First Name is required"),
  mobile: yup.string().required("Mobile Number is required"),
  // .length(11, 'Phone Number must be 11 characters long'),
  email: emailValidation,
  notes: yup.string(),
});
