import { XIcon } from "@heroicons/react/solid";
import React from "react";

const TransactionsWhiteBox = (props) => {
  let sign = "";
  if (props.amount > 0) {
    sign = "+";
  }

  return (
    <React.Fragment>
      {/* Created a to-do list white box component to add below */}
      <div className="flex bg-white rounded-2xl p-4">
        <div className="select-none flex-grow">{props.name}</div>
        {/* al posto del numero, dovrò mettere una props che va a prendere l'amount */}
        <div className="select-none mr-4">
          {sign}
          {props.amount}
        </div>
        <button
          className="flex items-center justify-center bg-blue-500 shadow-xl w-6 h-6 rounded-md transition duration-700 ease-in-out transform hover:scale-110"
          onClick={props.onRemoveClick}
        >
          <XIcon className="text-white" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default TransactionsWhiteBox;
