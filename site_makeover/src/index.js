import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Logo from "./components/Logo";
import MenuItems from "./components/MenuItems";
import Introduction from "./components/Introduction";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-container">
          <Logo />
          <MenuItems />
        </div>
        <Introduction />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
