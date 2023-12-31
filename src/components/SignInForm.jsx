import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { validate } from '../utils/validate';
import { checkPasswordStrength } from '../utils/checkPasswordStrength';

const SignInForm = () => {
  const [, setPasswordStrength] = useState(null);


  const initialValues = {
    email: "",
    password: "",
  };

  const submitForm = (values) => {
    console.log(values);
  };



  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { handleSubmit, handleChange, values, isValid, dirty } = formik;
        const password = values.password;
        const strength = checkPasswordStrength(password);
           const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
           const hasNumber = /\d/.test(password);

        return (
          <div className="flex justify-center items-center">
            <div className="w-[500px] mx-auto p-8">
              <h1 className="text-2xl font-bold mb-4">Sign in to continue</h1>
              <Form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput
                  label="Email"
                  type="email"
                  name="email"
                  id="email"
                />

                <CustomInput
                  label="Password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    handleChange(e);
                    setPasswordStrength(checkPasswordStrength(e.target.value));
                  }}
                />
                <div className="flex items-center">
                  Password Strength:{"  "}
                  {strength === "strong" ? (
                    <span className="text-green-500"> Strong</span>
                  ) : strength === "medium" ? (
                    <span className="text-yellow-500"> Medium</span>
                  ) : (
                    <span className="text-red-500"> Weak</span>
                  )}
                </div>

                {hasSpecialChar && !hasNumber && (
                  <div className="text-red-500">
                    Password should also include numbers for better strength.
                  </div>
                )}
                {!hasSpecialChar && hasNumber && (
                  <div className="text-red-500">
                    Password should also include character for better strength.
                  </div>
                )}
                {!hasSpecialChar && !hasNumber && (
                  <div className="text-red-500">
                    Password should also include characters for better strength. <br/>
                    Password should also include numbers for better strength. <br/>
                  </div>
                )}

                <button
                  type="submit"
                  className={`bg-blue-500 text-white p-2 rounded-md ${
                    !(dirty && isValid) ||
                    !(strength === "strong" || strength === "medium")
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={
                    !(dirty && isValid) ||
                    !(strength === "strong" || strength === "medium")
                  }
                >
                  Sign In
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
