import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, userNovalidValue }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter search image!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <header className={css.headerContainer}>
      <form className={css.formSearch} onSubmit={handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>
      <Toaster position={"top-right"} />
    </header>
  );
};

export default SearchBar;
