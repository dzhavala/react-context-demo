import React from "react";
import combineProviders from "../utils/combineProviders";
import { ThemeProvider } from "./themeContext";
import { TodoProvider } from "./todoContext";

const providers = [
    ThemeProvider as React.FC<{}>,
    TodoProvider as React.FC<{}>
];

export const AppContextProvider = combineProviders(...providers);
