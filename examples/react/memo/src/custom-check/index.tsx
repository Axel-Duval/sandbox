import React from "react";

interface IOwnProps {
    person: {
        name: string;
        age: number;
    };
}
const Element = (props: IOwnProps) => {
    const ref = React.useRef(0);
    return (
        <p>
            {props.person.name}-{props.person.age}: <strong>{ref.current++}</strong>
        </p>
    );
};

// Even if age changes, the function still return true.
const propsAreEqual = (previous: IOwnProps, current: IOwnProps) => {
    return previous.person.name === current.person.name;
};

const MemoizedElement = React.memo(Element, propsAreEqual);

export const WithCustomCheck = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With custom check">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element person={{ name: "Kelly", age: 65 }} />
                <MemoizedElement person={{ name: "Barth", age: 8 + counter }} />
            </div>
        </div>
    );
};
