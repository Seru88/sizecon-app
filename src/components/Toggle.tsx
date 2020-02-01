import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toggle: React.FC<Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "type" | "className"
>> = props => {
  const { children, onChange, ...inputProps } = props;
  const [toggle, setToggle] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(!toggle);
    if (onChange) onChange(event);
  };

  return (
    <div className="text-center">
      {/* <!-- Toggle Button --> */}
      <label htmlFor="toogleA" className="flex items-center">
        {/* <!-- toggle --> */}
        <div className="relative">
          {/* <!-- input --> */}
          <input
            id="toogleA"
            type="checkbox"
            className="hidden"
            onChange={handleChange}
            {...inputProps}
          />
          {/* <!-- line --> */}
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner toggle__line"></div>
          {/* <!-- dot --> */}
          <div
            className={`absolute inset-y-0 left-0 w-6 h-6 bg-white border ${
              toggle ? "border-green-600" : "border-gray-400"
            } rounded-full shadow toggle__dot`}
          >
            <FontAwesomeIcon
              className={toggle ? "text-white" : "text-green-500"}
              icon="heart"
              size="sm"
              style={{ marginBottom: 1 }}
            />
          </div>
        </div>
        {/* <!-- label --> */}
        <div className="ml-3 font-medium text-gray-700"></div>
      </label>
    </div>
  );
};

export default Toggle;
