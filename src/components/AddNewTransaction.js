import React, { useState } from "react";

const AddNewTransaction = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClick = () => {
    if (name === "" || amount === "") {
      return;
    }

    // regex che controlla se la stringa contiene un qualsiasi carattere che non sia un numero
    if (!new RegExp(/[\D]+/).test(name)) {
      return;
    }

    // regex che controlla se la stringa contiene +, - o dei numeri. non accetta altri caratteri
    if (!new RegExp(/^[-+\d]+$/).test(amount)) {
      return;
    }

    props.addItem({
      name: name,
      amount: parseInt(amount),
    });

    // una volta che ha aggiunto nome e ammontare della transazione, resetta i box
    setName("");
    setAmount("");
  };

  return (
    <React.Fragment>
      <div className="mb-4 font-bold text-2xl text-gray-600">
        Add new transaction:
      </div>

      {/* Set the prop addItem of the input box component with addItem function */}
      <div className="mb-1 text-gray-600 font-semibold text-lg">Name</div>

      <div className="mb-4 flex px-4 py-3 shadow-xl bg-white w-full rounded-2xl">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="text-black w-full outline-none"
          name="transaction"
        />
      </div>

      <div className="text-gray-600 font-semibold text-lg">Amount</div>
      <div className="mb-2 text-gray-600 font-semibold text-sm">
        (negative - expense, positive - income)
      </div>

      <div className="mb-6 flex px-4 py-3 shadow-xl bg-white w-full rounded-2xl">
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className="text-black w-full outline-none"
          name="amount"
        />
      </div>

      <button
        className="w-full font-semibold text-xl px-6 py-3 shadow-xl bg-gradient-to-tl from-pink-500 to-blue-500 text-white rounded-2xl transition duration-500 ease-in-out hover:opacity-95 transform hover:-translate-y-1"
        onClick={handleClick}
      >
        Add transaction
      </button>
    </React.Fragment>
  );
};

export default AddNewTransaction;
