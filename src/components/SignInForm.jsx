import { Formik } from "formik";


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
    const {
      values,
      handleChange,
      handleSubmit,
      errors,
      touched,
      handleBlur,
      isValid,
      dirty,
    } = formik;

    return (
      <div className="flex justify-center items-center">
        <div className="w-[500px] mx-auto p-8">
          <h1 className="text-2xl font-bold mb-4">Sign in to continue</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:border-blue-500`}
              />
              {errors.email && touched.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 border ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:border-blue-500`}
              />
              {errors.password && touched.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>

            <button
              type="submit"
              className={`bg-blue-500 text-white p-2 rounded-md ${
                !(dirty && isValid) ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!(dirty && isValid)}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }}
</Formik>
  )
};

export default SignInForm;
