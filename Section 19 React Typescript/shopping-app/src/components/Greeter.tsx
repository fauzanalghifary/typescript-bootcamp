import React from "react";

interface GreeterProps {
  person: string;
}

const Greeter = ({ person }: GreeterProps): JSX.Element => {
  return <h1>Hello, {person}</h1>;
};

// const Greeter: React.FC = (props: { person: string }) => {
//   return <h1>Hello</h1>;
// };

export default Greeter;
