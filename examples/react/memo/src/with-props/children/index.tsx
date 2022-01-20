import React from "react";

const Element = (props: React.HTMLProps<HTMLParagraphElement>) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.children}: <strong>{ref.current++}</strong>
        </p>
    );
};

const MemoizedElement = React.memo(Element);

export const WithChildrenProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With children props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element>Simple</Element>
                <MemoizedElement>Memoized</MemoizedElement>
            </div>
        </div>
    );
};
