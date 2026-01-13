import React from "react";

export default function Input({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      {...props}
    />
  );
}
