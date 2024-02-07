import React, { useState } from "react";
import { FormUserDetails } from "./FormUserDetails";
import { FormPersonalDetails } from "./FormPersonalDetails";
import { Confirm } from "./Confirm";
import { Success } from "./Success";

export const UserForm = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    occupation: "",
    city: "",
    bio: "",
  });
  console.log(
    "CHECK step",step
  )
  const handleChange = (key, value) => {
    console.log(key, value);
    setUserData((prevUserData) => ({ ...prevUserData, [key]: value }));
  };
  const nextStep = () => {
    console.log("step",step)
    setStep(step+1);
  };
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  return (
    <div>
      {(() => {
        switch (step) {
          case 1:
            return (
              <FormUserDetails
                nextStep={nextStep}
                handleChange={handleChange}
                prevStep={prevStep}
                userData={userData}
              />
            );
          case 2:
            return (
              <FormPersonalDetails
                nextStep={nextStep}
                handleChange={handleChange}
                prevStep={prevStep}
                userData={userData}
              />
            );
          case 3:
            return (
              <Confirm
                nextStep={nextStep}
                handleChange={handleChange}
                prevStep={prevStep}
                userData={userData}
              />
            );
          case 4:
            return <Success />;
          default:
            return <FormUserDetails nextStep={nextStep} userData={userData} />;
        }
      })()}
    </div>
  );
};
