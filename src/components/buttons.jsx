// import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border-style: none;
`;

const Buttons = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {numbers.map((number) => (
        <Button key={number}>{number}</Button>
      ))}
    </div>
  );
};

export default Buttons;
