import React from "react";
import { render, fireEvent, wait } from "react-testing-library";

it("must be a problem between the chair and the keyboard", async () => {
  const div = document.createElement("div");

  const { getByValue, debug } = render(
    <input type="text" value="initial text" />
  );

  const input = getByValue(/initial text/i); // ok

  fireEvent.change(input, { target: { value: "updated text" } }); // ok

  // text input still contains the initial value
  await wait(() => getByValue(/updated text/i)); // ❌
});


