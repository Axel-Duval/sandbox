import React from "react";

interface IOwnProps {
    getName: () => string;
}
const Element = (props: IOwnProps) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.getName()}: <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

const fixedFunction = () => "Luca"; // Fixed reference

export const WithFunctionProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With function props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element getName={() => "Xian"} />
                <MemoizedElement getName={() => "Dave"} />
                <MemoizedElement getName={fixedFunction} />
            </div>
        </div>
    );
};
