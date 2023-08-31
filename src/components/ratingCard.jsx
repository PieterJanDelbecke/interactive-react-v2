import { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 1440px;
  height: 800px;
  border: 1px solid black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Component = styled.div`
  width: 340px;
  height: 400px;
  border: 1px solid black;
  background-color: hsl(213, 19%, 18%);
  border-radius: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  color: hsl(0, 0%, 100%);
`;

const Text = styled.p`
  color: hsl(216, 12%, 54%);
`;

const Numbers = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NumberButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border-style: none;
  margin: 5px;
  :hover {
    background-color: hsl(25, 97%, 53%);
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: 5px auto;
  border: none;
  width: 320px;
  height: 40px;
  border-radius: 20px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(25, 97%, 53%);
  :hover {
    color: hsl(25, 97%, 53%);
    background-color: hsl(0, 0%, 100%);
  }
`;

const RatingCard = () => {
  const numbers = [1, 2, 3, 4, 5];
  const [score, setScore] = useState(0);

  const clicked = (number) => {
    setScore(number);
    console.log("score:", score);
  };

  return (
    <Container>
      <Component>
        <Title>How did we do?</Title>
        <Text>
          Please let us know how we did with your ssupport request. All feedback
          is appreciated to help us improve our offering!
        </Text>
        <Numbers>
          {numbers.map((number) => (
            <NumberButton key={number} onClick={() => clicked(number)}>
              {number}
            </NumberButton>
          ))}
        </Numbers>
        <SubmitButton>Submit</SubmitButton>
      </Component>
    </Container>
  );
};

export default RatingCard;
