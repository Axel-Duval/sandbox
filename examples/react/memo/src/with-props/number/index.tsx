import React from "react";

interface IOwnProps {
    age: number;
}
const Element = (props: IOwnProps) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.age} renders:
            <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

export const WithNumberProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With number props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element age={18} />
                <MemoizedElement age={5} />
            </div>
        </div>
    );
};
