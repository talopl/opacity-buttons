import React from "react";

interface Props {
  color: string;
  text: string;
  onClick: () => void;
}

function LeftOpacityButton(props: Props) {
  const buttonStyles = {
    backgroundColor: props.color,
  };

  return <div style={buttonStyles}>props.text</div>;
}

export default LeftOpacityButton;
