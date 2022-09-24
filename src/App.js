import logo from "./logo.svg";
import "./App.css";
import Accordian from "../src/components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const items = [
  {
    title: "What is React ?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <br />
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
}

export default App;
