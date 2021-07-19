import "./App.css";
import React, { useState } from "react";
import {
  // ViewListIcon,
  // CheckIcon,
  // XIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
} from "@heroicons/react/solid";

const TotBalance = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center px-2 text-white mx-4 pb-4 mb-6 shadow-sm select-none bg-gradient-to-tl from-pink-500 to-blue-500 w-auto sm:h-52 md:h-60 lg:h-60 xl:h-80 rounded-3xl">
        <div className="">
          <div className="sm:text-lg lg:text-xl xl:text-2xl text-center pt-4">
            Total Balance
          </div>
          <div className="font-semibold sm:text-5xl lg:text-6xl xl:text-7xl text-center pt-2 pb-6">
            {" "}
            100000 €
          </div>

          {/* contenitore di tutto */}
          <div className="flex">
            <div className="flex items-center">
              <div className="flex items-center w-8 h-8 mr-2 rounded-full bg-gray-100 bg-opacity-30">
                <ArrowSmDownIcon className="w-6 h-6 flex flex-grow text-green-500" />
              </div>
              <div className="sm:text-sm lg:text-lg xl:text-xl">
                Income
                <div className="font-semibold"> 1500</div>
              </div>
            </div>
            <div className="flex flex-grow ml-4 text-transparent">.</div>
            <div className="flex justify-center items-center">
              <div className="flex flex-grow-none items-center w-8 h-8 mr-2 rounded-full bg-gray-100 bg-opacity-30">
                <ArrowSmUpIcon className="w-6 h-6 flex flex-grow text-red-500" />
              </div>
              <div className="sm:text-sm lg:text-lg xl:text-xl">
                Expenses
                <div className="font-semibold"> 600 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

const TransactionsWhiteBox = (props) => {
  return (
    <React.Fragment>
      {/* Created a to-do list white box component to add below */}
      <div className="mx-8 mt-4 mb-2 flex items-center bg-white h-14 rounded-2xl">
        <div className="pl-4 select-none flex-grow">{props.text}</div>
        {/* al posto del numero, dovrò mettere una props che va a prendere l'amount */}
        <div className="select-none pr-4">-250</div>
      </div>
    </React.Fragment>
  );
};

const initialValues = {
  transaction: "",
  amount: "",
};

const InputBox = (props) => {
  const [values, setValues] = useState(initialValues);

  // in this function we handle the text input change to update the state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // in this function we handle the button click and we call the addItem function
  function handleClick() {
    if (values !== "") {
      props.addItem(values);
      setValues("");
    }
  }

  return (
    <div className="flex items-center my-4">
      <div className="flex px-4 mx-8 shadow-xl bg-white w-full h-12 rounded-2xl">
        <input
          type="text"
          value={values.transaction}
          onChange={handleChange}
          className="text-black w-full outline-none"
          name="prova"
        />
        <input
          type="amount"
          value={values.amount}
          onChange={handleChange}
          className="text-black w-full outline-none"
          name="numeri"
        />
      </div>

      {/* <button
        className="flex items-center justify-center bg-purple-800 shadow-xl w-12 h-12 rounded-full transition duration-700 ease-in-out transform hover:scale-110"
        onClick={handleClick}> */}
      {/* rounded button that adds the new to do list box */}
      {/* <ViewListIcon className="h-6 w-6 text-white" />
      </button> */}
    </div>
  );
};

const TransactionList = () => {
  const [items, setItems] = useState(["Grocery", "Singing lesson"]);

  // function that adds the Item
  function addItem(item) {
    const itemsCopy = [...items];
    itemsCopy.push(item);
    setItems(itemsCopy);
  }

  // come rimuovere un index
  function removeItem(index) {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  }

  const list = items.map((item, index) => {
    return (
      <TransactionsWhiteBox
        key={index}
        text={item}
        onRemoveClick={() => {
          removeItem(index);
        }}
      />
    );
  });

  return (
    <div className="flex h-screen">
      <div className="px-8 py-8 flex-grow bg-gray-100">
        <TotBalance />
        <div className="mx-8 font-bold text-2xl text-gray-600">
          Transactions:
        </div>

        {/* Component that creates as many to-do list boxes as we want */}
        {list}
        <div className="mx-8 font-bold pt-6 pb-4 text-2xl text-gray-600">
          Add new transaction:
        </div>

        {/* aggiungi quiiiiiiiiiiiiiii */}
        {/* Set the prop addItem of the input box component with addItem function */}
        <div className="mx-8 text-gray-600 font-semibold text-lg">
          Enter your transaction
        </div>

        <InputBox addItem={addItem} />
        <div className="mx-8 text-gray-600 font-semibold text-lg">Amount</div>
        <div className="mx-8 text-gray-600 font-semibold text-sm">
          (negative - expense, positive - income){" "}
        </div>
        <InputBox addItem={addItem} />

        {/* <div className="flex my-8"> */}

        <button
          className="flex items-center justify-center font-semibold text-xl px-4 mx-8 shadow-xl bg-gradient-to-tl from-pink-500 to-blue-500 text-white w-5/6 h-12 rounded-2xl  transition duration-500 ease-in-out hover:opacity-95 transform hover:-translate-y-1"
          onClick={handleClick}
        >
          Add transaction
        </button>
      </div>
    </div>
  );
};

// ho creato la copia di inputbox perchè sto provando sopra a far funzionare i due campi
// const InputBox = (props) => {
//   const [text, setText] = useState("");

//   // in this function we handle the text input change to update the state
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   // in this function we handle the button click and we call the addItem function
//   function handleClick() {
//     if (text !== "") {
//       props.addItem(text);
//       setText("");
//     }
//   }

//   return (
//     <div className="flex items-center my-4">
//       <div className="flex px-4 mx-8 shadow-xl bg-white w-full h-12 rounded-2xl">
//         <input
//           type="text"
//           value={text}
//           onChange={handleChange}
//           className="text-black w-full outline-none"
//         />
//       </div>

//       {/* <button
//         className="flex items-center justify-center bg-purple-800 shadow-xl w-12 h-12 rounded-full transition duration-700 ease-in-out transform hover:scale-110"
//         onClick={handleClick}> */}
//       {/* rounded button that adds the new to do list box */}
//       {/* <ViewListIcon className="h-6 w-6 text-white" />
//       </button> */}
//     </div>
//   );
// };

export default TransactionList;
