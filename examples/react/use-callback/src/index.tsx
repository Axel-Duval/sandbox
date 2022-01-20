import React from "react";
import ReactDOM from "react-dom";

const Button = React.memo((props: React.HTMLProps<HTMLButtonElement>) => {
  const ref = React.useRef(0);
  return (
    <button onClick={props.onClick}>
      {props.children}: <strong>{ref.current++}</strong>
    </button>
  );
});

const App = () => {
  const callback = (e: React.MouseEvent) => alert("Yes !");
  const memoizedCallback = React.useCallback(
    (e: React.MouseEvent) => alert("Yes !"),
    []
  );

  // Trigger re-render with simple state mutation
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    const itl = setInterval(() => setCounter((c) => c + 1), 1000);
    return () => clearInterval(itl);
  }, []);

  return (
    <>
      <h1 className="border">{counter}</h1>
      <p>Component redraw counter</p>
      <div className="flex justify-center gap" display-name="Buttons">
        <Button onClick={callback}>simple</Button>
        <Button onClick={memoizedCallback}>memoized</Button>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
