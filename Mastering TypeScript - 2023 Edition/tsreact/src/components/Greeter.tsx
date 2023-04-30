interface GreeterProps {
  person: string;
}

const Greeter = ({ person }: GreeterProps): JSX.Element => {
  return <h1>{`Hello, ${person}`}</h1>;
};

export { Greeter };
