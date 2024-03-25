import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userText = form.elements.input.value;
    if (form.elements.input.value.trim() === "") {
      toast.error("Please enter search image!");
      return;
    }
    onSubmit(userText);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
