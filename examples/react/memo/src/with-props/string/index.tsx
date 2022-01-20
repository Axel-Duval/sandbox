import React from "react";

interface IOwnProps {
    name: string;
}
const Element = (props: IOwnProps) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.name} renders:
            <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

export const WithStringProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With string props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element name="Bob" />
                <MemoizedElement name="Alice" />
            </div>
        </div>
    );
};
