import React from "react";

const ActionBttn = ({ action, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-300 px-2 py-1 rounded-2xl font-semibold mt-3 mb-3 text-xs"
    >
      {action}
    </button>
  );
};

export default ActionBttn;
