import React from "react";

interface IOwnProps {
    male: boolean;
}
const Element = (props: IOwnProps) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.male ? "Male" : "Female"} renders:
            <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

export const WithBooleanProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With boolean props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element male={false} />
                <MemoizedElement male={true} />
            </div>
        </div>
    );
};
