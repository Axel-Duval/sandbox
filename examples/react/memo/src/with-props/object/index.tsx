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

const MemoizedElement = React.memo(Element);

const fixedPerson = {
    name: "Ted",
    age: 29
}; // Fixed reference

export const WithObjectProps = () => {
    const [counter, setCounter] = React.useState(0);
    const increment = () => setCounter((i) => i + 1);

    return (
        <div display-name="With object props">
            <button onClick={increment}>Click here to redraw</button>
            <h1 className="border">{counter}</h1>
            <p>Component redraw counter</p>
            <div className="text-left" display-name="Children">
                <Element person={{ name: "Joe", age: 41 }} />
                <MemoizedElement person={{ name: "Lisa", age: 16 }} />
                <MemoizedElement person={fixedPerson} />
            </div>
        </div>
    );
};
