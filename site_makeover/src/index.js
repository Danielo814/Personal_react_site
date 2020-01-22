import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import Logo from "./components/Logo";
import MenuItems from "./components/MenuItems";
import Introduction from "./components/Introduction";
import Project from "./components/Project";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menu-container">
          <Logo />
          <MenuItems />
        </div>
        <Introduction />
        <div id="project-container">
          <Project
            project_name="Converter"
            project_description="See temperatures in fahrenheit and celcius."
          />
          <Project
            project_name="Reminders App"
            project_description="See list of reminders and mark as complete or incomplete."
          />
          <Project
            project_name="Timer"
            project_description="Count down from a time specified by the user"
          />
          <Project
            project_name="Image Display"
            project_description="Displays 10 images based on a search term entered by the user. Built with React."
          />
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
