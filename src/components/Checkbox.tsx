import React from "react";

const Checkbox: React.FC<Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "type" | "className"
>> = props => {
  const { children, ...inputProps } = props;
  return (
    <label className="flex items-start justify-start my-4">
      <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-white border-2 border-gray-400 rounded focus-within:border-blue-500">
        <input
          type="checkbox"
          className="absolute opacity-0"
          {...inputProps}
          // onChange={handleBookmarkToggle}
        />
        <svg
          className="hidden w-4 h-4 text-green-500 pointer-events-none fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div className="select-none">{children}</div>
    </label>
  );
};

export default Checkbox;
