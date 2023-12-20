/* eslint-disable react/prop-types */
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label htmlFor={props.id || props.name} className="mb-2">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`p-2 border ${
          meta.error && meta.touched ? "border-red-500" : "border-gray-300"
        } rounded-md focus:outline-none focus:border-blue-500`}
      />
      {meta.error && meta.touched && (
        <span className="text-red-500 text-sm">{meta.error}</span>
      )}
    </div>
  );
};

export default CustomInput;
