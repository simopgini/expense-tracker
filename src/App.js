import React, { useState } from "react";
import AddNewTransaction from "./components/AddNewTransaction";
import TotalBalance from "./components/TotalBalance";
import TransactionsWhiteBox from "./components/TransactionsWhiteBox";

const App = () => {
  const [items, setItems] = useState([
    {
      name: "Grocery",
      amount: -12,
    },

    {
      name: "Salary",
      amount: +1500,
    },
    {
      name: "Singing Lesson",
      amount: -10,
    },
  ]);

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
        name={item.name}
        amount={item.amount}
        onRemoveClick={() => {
          removeItem(index);
        }}
      />
    );
  });

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <TotalBalance items={items} />

      <div className="mb-6">
        <div className="mb-4 font-bold text-2xl text-gray-600">
          Transactions:
        </div>
        {/* Component that creates as many to-do list boxes as we want */}
        <div className="space-y-4">{list}</div>
      </div>

      <AddNewTransaction addItem={addItem} />
    </div>
  );
};

export default App;
