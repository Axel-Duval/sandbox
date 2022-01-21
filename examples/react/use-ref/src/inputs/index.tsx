import React from "react";

const WithoutRef = () => {
    const [value, setValue] = React.useState("");
    const handleChange = (e: any) => setValue(e.target.value);

    return (
        <div display-name="With useState" className="flex flex-column text-left">
            <input
                type="text"
                onChange={handleChange}
                value={value}
                placeholder="Aa"
            />
            <p>{value}</p>
        </div>
    );
};

const WithRef = () => {
    const [value, setValue] = React.useState("");
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const onBlur = (_: React.FocusEvent<HTMLInputElement>) =>
        setValue(inputRef.current ? inputRef.current.value : "");

    return (
        <div display-name="With useRef" className="flex flex-column text-left">
            <sub>
                <i>Update on blur</i>
            </sub>
            <input type="text" onBlur={onBlur} ref={inputRef} placeholder="Aa" />
            <p>{value}</p>
        </div>
    );
};

export const Inputs = () => {
    return (
        <div display-name="Inputs" className="flex flex-column gap">
            <h1>Inputs</h1>
            <WithoutRef />
            <WithRef />
        </div>
    );
};
