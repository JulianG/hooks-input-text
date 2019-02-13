import React from "react";
// import ReactDOM from 'react-dom';
import App from "./App";

import { render, fireEvent, wait } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

it("changes text when hitting enter", async () => {
  const div = document.createElement("div");

  const { getByText, getByValue, debug } = render(<App />);

  const input = getByValue(/initial text/i);
  
  fireEvent.focus(input);
  fireEvent.change(input, { target: { value: 'updated text' } });
  fireEvent.keyUp(input, { key: 'Enter', code: 13 });
  
  await wait(()=> getByValue(/updated text/i));
 
});
