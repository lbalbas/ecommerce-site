import React from "react";

const PrimaryButton = (props: React.ComponentProps<"button">) => {
  return (
    <button
      onClick={props.onClick}
      className="min-w-fit px-4 text-ivory font-bold py-1.5  flex items-center justify-around rounded-full bg-trueblue"
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
