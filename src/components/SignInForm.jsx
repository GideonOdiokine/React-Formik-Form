import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";

const SignInForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const submitForm = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { handleSubmit, isValid, dirty } = formik;

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
                />

                <button
                  type="submit"
                  className={`bg-blue-500 text-white p-2 rounded-md ${
                    !(dirty && isValid) ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!(dirty && isValid)}
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
