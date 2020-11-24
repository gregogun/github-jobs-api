import React from "react";
import { addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";

addDecorator(themeDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
