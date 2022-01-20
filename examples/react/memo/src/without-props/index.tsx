import React from "react";

const Element = () => {
    const ref = React.useRef(0);
    return (
        <p>
            Renders : <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

export const WithoutProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="Without props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element />
                <MemoizedElement />
            </div>
        </div>
    );
};
