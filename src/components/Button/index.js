import * as React from "../../_base";

export const Button = ({ onClick, children, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);
