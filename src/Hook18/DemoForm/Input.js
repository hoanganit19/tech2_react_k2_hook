import React, { useId } from "react";

const Input = React.forwardRef(({ label, name }, ref) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={"text"} id={id} name={name} placeholder={label} ref={ref} />
    </div>
  );
});

export default Input;
