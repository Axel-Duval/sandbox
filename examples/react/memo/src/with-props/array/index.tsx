import React from "react";

interface IOwnProps {
    names: string[];
}
const Element = (props: IOwnProps) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.names.join("-")}: <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

const fixedArray = ["Alex", "Tom"]; // Fixed reference

export const WithArrayProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With array props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element names={["Bob", "Mike"]} />
                <MemoizedElement names={["Alice", "Helen"]} />
                <MemoizedElement names={fixedArray} />
            </div>
        </div>
    );
};
