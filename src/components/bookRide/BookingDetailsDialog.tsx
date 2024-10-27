import React, { Dispatch, FC } from "react";
import { Button } from "../ui/button";
import CustomImput from "../shared/CustomImput";
import { useFormik } from "formik";
import { bookingUserInfoValidation } from "./validations";

interface BookingDetailsDialogProps {
  setStep: Dispatch<React.SetStateAction<number>>;
}
const BookingDetailsDialog: FC<BookingDetailsDialogProps> = ({ setStep }) => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      notes: "",
    },
    validationSchema: bookingUserInfoValidation,
    onSubmit() {
      setStep(3);
    },
  });

  return (
    <div className="p-[4rem] grid gap-[2rem] h-[90vh] overflow-auto">
      <div className="space-y-[1rem]">
        <h2 className="text-[4rem] leading-[4.5rem] text-primary">
          30 Mins Jetcar Ride
        </h2>
        <p className="text-[#76767D] font-light text-[1.6rem] leading-[2.1rem]">
          You selected a booking for{" "}
          <span className="font-semibold">
            JetCar Rental 30 mins HR CARD (N20,000 for one person) at 1:45 pm on
            February 6, 2024.
          </span>{" "}
          Please provide your details in the form below to proceed with booking.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-[2rem]" >
        <div className="grid gap-[2rem] p-[2rem] border rounded-[1.2rem]">
          <div className="grid grid-cols-2 gap-[1rem]">
            <CustomImput
              label={"First name"}
              inputKey={"firstName"}
              placeholder={"First Name"}
              value={values["firstName"]}
              error={errors["firstName"]}
              touched={touched["firstName"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <CustomImput
              label={"Last name"}
              inputKey={"lastName"}
              placeholder={"First Name"}
              value={values["lastName"]}
              error={errors["lastName"]}
              touched={touched["lastName"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-[1rem] ">
            <CustomImput
              label={"Mobile Number"}
              inputKey={"mobile"}
              placeholder={"Mobile Number"}
              value={values["mobile"]}
              error={errors["mobile"]}
              touched={touched["mobile"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <CustomImput
              label={"Email Address"}
              inputKey={"email"}
              placeholder={"Email Address"}
              value={values["email"]}
              error={errors["email"]}
              touched={touched["email"]}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <CustomImput
            label={"Any Notes"}
            inputKey={"notes"}
            placeholder={"Type Here"}
            value={values["notes"]}
            error={errors["notes"]}
            touched={touched["notes"]}
            onChange={handleChange}
            onBlur={handleBlur}
            isTextArea
          />
        </div>

        <div className="flex justify-end">
          <Button className="bg-black">Next Step</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingDetailsDialog;
