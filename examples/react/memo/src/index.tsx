import React from "react";
import ReactDOM from "react-dom";
import { WithCustomCheck } from "./custom-check";
import { WithArrayProps } from "./with-props/array";
import { WithBooleanProps } from "./with-props/boolean";
import { WithChildrenProps } from "./with-props/children";
import { WithFunctionProps } from "./with-props/function";
import { WithNumberProps } from "./with-props/number";
import { WithObjectProps } from "./with-props/object";
import { WithStringProps } from "./with-props/string";
import { WithoutProps } from "./without-props";

const App = () => (
  <>
    <WithoutProps />
    <WithStringProps />
    <WithNumberProps />
    <WithBooleanProps />
    <WithChildrenProps />
    <WithArrayProps />
    <WithObjectProps />
    <WithFunctionProps />
    <WithCustomCheck />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
