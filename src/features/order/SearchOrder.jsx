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
      />
    </form>
  );
}

export default SearchOrder;
