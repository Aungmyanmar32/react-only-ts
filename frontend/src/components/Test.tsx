import React from "react";
interface Props {
  superman: string;
}

//props = {superman: "hello"}
const Test = ({ superman }: Props) => {
  return (
    <div>
      <h1>Test component</h1>
      <h2>{superman}</h2>
    </div>
  );
};

export default Test;
