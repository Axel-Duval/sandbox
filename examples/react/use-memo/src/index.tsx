import React from "react";
import ReactDOM from "react-dom";

const fibonacci = (n: number): number =>
  n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

const initialSnail = "🐌";

const WithoutUseMemo = () => {
  const [count, setCount] = React.useState(40);
  const [snail, setSnail] = React.useState(initialSnail);

  const calculation = fibonacci(count);

  const again = () => setCount(40);
  const push = () => setSnail((s) => "_" + s);
  const reset = () => setSnail(initialSnail);

  return (
    <div display-name="Witout useMemo" className="gap flex flex-column">
      <div display-name="Cheap">
        <button onClick={push}>
          <span role="img" aria-label="lettuce">
            🥬
          </span>
        </button>
        <button onClick={reset}>
          <span role="img" aria-label="lettuce">
            🐓
          </span>
        </button>
        <h2>Snail race</h2>
        <p className="text-left">{snail}</p>
      </div>
      <div display-name="Expensive">
        <button onClick={again}>Compute again</button>
        <h2>Expensive Calculation</h2>
        fibonacci(40) = {calculation}
      </div>
    </div>
  );
};

const WithUseMemo = () => {
  const [count, setCount] = React.useState(40);
  const [snail, setSnail] = React.useState(initialSnail);

  const calculation = React.useMemo(() => fibonacci(count), [count]);

  const again = () => setCount(40);
  const push = () => setSnail((s) => "_" + s);
  const reset = () => setSnail(initialSnail);

  return (
    <div display-name="With useMemo" className="gap flex flex-column">
      <div display-name="Cheap">
        <button onClick={push}>
          <span role="img" aria-label="lettuce">
            🥬
          </span>
        </button>
        <button onClick={reset}>
          <span role="img" aria-label="lettuce">
            🐓
          </span>
        </button>
        <h2>Snail race</h2>
        <p className="text-left">{snail}</p>
      </div>
      <div display-name="Expensive">
        <button onClick={again}>Compute again</button>
        <h2>Expensive Calculation</h2>
        fibonacci(40) = {calculation}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <WithoutUseMemo />
      <WithUseMemo />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
