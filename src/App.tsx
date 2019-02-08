import React from "react";
import { InputForm } from "./InputForm";

const App = () => {
  const [text, setText] = React.useState("initial text");
  const [key, setKey] = React.useState(1);

  return (
    <div className="App">
      <h1>Input Text using Hooks</h1>
      <p>Type on the text field.</p>
      <InputForm
        key={key}
        text={text}
        onSubmit={text => setText(text)}
        onCancel={() => setKey(1 - key)}
      />
      <p className="tip">
        Press ENTER to store the value.
        <br />
        Press ESC to cancel and restore the previous value.
      </p>
      <p>
        Value set to: <strong>{text}</strong>
      </p>
    </div>
  );
};

export default App;
