import { Component } from "react";
import { warningMessage } from "../services/toasts";

class Searchbar extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    const { clearRender, onSubmit } = this.props;
    e.preventDefault();
    if (value.trim() === "") {
      clearRender();
      this.setState({ value: "" });
      return warningMessage("Enter something in search input!");
    }
    onSubmit(value);
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
