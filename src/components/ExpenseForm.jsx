import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [amountArray, setAmountArray] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      title: title,
      category: category,
      amount: amount,
      date: date,
    };
  
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setAmountArray([...storedExpenses, newExpense]);
    //save to local storage
    localStorage.setItem("expenses", JSON.stringify([...storedExpenses, newExpense]));

  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-6">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-1/2"
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Add Expense</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Category
          </label>
          <select value={category} onChange={(e)=> setCategory(e.target.value)}  id="category" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="-ve for expense / +ve for income"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
