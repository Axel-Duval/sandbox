import React from "react";

const clock = [
    "🕛",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚"
];

const WithoutRef = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount((c) => (c + 1) % clock.length);

    console.log("WithoutRef rendered");

    return (
        <div display-name="With useState" className="flex flex-column">
            <button onClick={increment}>Add one hour</button>
            <h1>{clock[count]}</h1>
        </div>
    );
};

const WithRef = () => {
    const count = React.useRef(0);
    const increment = () => (count.current = (count.current + 1) % clock.length);

    console.log("WithRef rendered");

    return (
        <div display-name="With useRef" className="flex flex-column">
            <button onClick={increment}>Add one hour</button>
            <h1>{clock[count.current]}</h1>
            <sub>
                The component does not redraw,
                <br />
                force redraw with button on top.
            </sub>
        </div>
    );
};

export const ReRendering = () => {
    const [visible, setVisible] = React.useState(true);
    const [, setCount] = React.useState(0);
    const toggle = () => setVisible((v) => !v);
    const increment = () => setCount((c) => c + 1);

    return (
        <div display-name="Re-rendering" className="flex flex-column gap">
            <button onClick={toggle}>Toggle visibility</button>
            <button onClick={increment}>Click to redraw</button>
            <h1>Clocks</h1>
            {visible ? (
                <>
                    <WithoutRef />
                    <WithRef />
                </>
            ) : null}
        </div>
    );
};
