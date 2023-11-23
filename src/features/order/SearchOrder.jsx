import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  //this fucntion sets the url and redirect us to the order with ID
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
    console.log(query);
  };

  //returns a simple input that updates the state activates the handleSubmit on submit
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search order #"
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-72"
      />
    </form>
  );
}

export default SearchOrder;
