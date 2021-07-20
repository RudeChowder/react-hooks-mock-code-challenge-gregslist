import React from "react";
import Search from "./Search";

function Header({ search, onChangeSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onChangeSearch={onChangeSearch} />
    </header>
  );
}

export default Header;
