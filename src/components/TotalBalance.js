import React from "react";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

const TotalBalance = (props) => {
  let income = 0;
  let expenses = 0;
  for (const item of props.items) {
    if (item.amount < 0) {
      expenses += Math.abs(item.amount);
    } else {
      income += item.amount;
    }
  }

  return (
    <React.Fragment>
      <div className="flex items-center justify-center text-white py-4 md:py-20 mb-6 shadow-sm select-none bg-gradient-to-tl from-pink-500 to-blue-500 rounded-3xl">
        <div>
          <div className="sm:text-lg lg:text-xl xl:text-2xl text-center mb-1">
            Total Balance
          </div>
          <div className="font-semibold sm:text-5xl lg:text-6xl xl:text-7xl text-center pb-6">
            {income - expenses} €
          </div>

          {/* contenitore di tutto */}
          <div className="flex justify-between">
            <div className="flex items-center mr-8">
              <div className="flex items-center p-1 mr-2 rounded-full bg-gray-100 bg-opacity-30">
                <ArrowSmDownIcon className="w-6 h-6 flex flex-grow text-green-500" />
              </div>

              <div className="sm:text-sm lg:text-lg xl:text-xl">
                Income
                <div className="font-semibold">{income}</div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex flex-grow-none items-center p-1 mr-2 rounded-full bg-gray-100 bg-opacity-30">
                <ArrowSmUpIcon className="w-6 h-6 flex flex-grow text-red-500" />
              </div>

              <div className="sm:text-sm lg:text-lg xl:text-xl">
                Expenses
                <div className="font-semibold">{expenses}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TotalBalance;
