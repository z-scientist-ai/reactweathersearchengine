import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          {/* <a
            href="#"
            rel="noopener noreferrer"
          >
            Zara
          </a>*/ }
          <strong>Zara</strong>{" "}
          and is{" "}
          <a
            href="https://github.com/z-scientist-ai/reactweathersearchengine"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/z-scientist-ai/reactweathersearchengine"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
