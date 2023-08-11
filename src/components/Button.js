import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button className="bg-gray-300 rounded shadow p-3" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
