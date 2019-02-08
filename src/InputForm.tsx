import React from 'react';

const ENTER: number = 13;
const ESC: number = 27;

type Props = {
  text: string;
  onSubmit(text: string): void;
  onCancel(): void;
};

export const InputForm = (props: Props) => {

  const [currentText, setText] = React.useState(props.text);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.keyCode) {
      case ENTER:
        props.onSubmit(currentText);
        break;
      case ESC:
        props.onCancel();
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleBlur = (_: React.FocusEvent<HTMLInputElement>) => {
    props.onCancel();
  };

  return (
    <input
      autoFocus={true}
      type="text"
      defaultValue={props.text}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
