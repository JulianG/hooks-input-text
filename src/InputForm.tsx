import React from "react";

const ENTER: number = 13;
const ESC: number = 27;

type Props = {
  text: string;
  onSubmit(text: string): void;
  onCancel(): void;
};

export const InputForm = (props: Props) => {
  const { text, onSubmit, onCancel } = props;

  const [currentText, setText] = React.useState(text);

  const handleKeyUp = ({ keyCode }: { keyCode: number }) => {
    switch (keyCode) {
      case ENTER:
        onSubmit(currentText);
        break;
      case ESC:
        onCancel();
        break;
    }
  };

  return (
    <input
      autoFocus={true}
      type="text"
      defaultValue={text}
      onKeyUp={handleKeyUp}
      onChange={e => setText(e.target.value)}
      onBlur={() => onCancel()}
    />
  );
};
