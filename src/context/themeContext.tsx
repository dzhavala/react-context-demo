import { FC, useReducer, PropsWithChildren } from "react";
import createContextAndProvider from '../utils/createContextAndProvider';

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeStateType = {
  theme: Theme;
}

type ThemeContextType = {
  state: ThemeStateType;
  setTheme: (theme: Theme) => void;
};

type ThemeActionType = {
  type: "setTheme";
  payload: Theme;
};

const themeReducer = (
  state: ThemeStateType,
  action: ThemeActionType
) => {
  switch (action.type) {
    case "setTheme": {
      return { theme: action.payload};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const [useThemeContext, ThemeContextProvider] = createContextAndProvider<ThemeContextType>();

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const initialState: ThemeStateType = { theme: Theme.LIGHT};
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const value: ThemeContextType = {
    state,
    setTheme: (theme: Theme) => {
      dispatch({ type: "setTheme", payload: theme });
    },
  };

  return (
    <ThemeContextProvider value={value}>{children}</ThemeContextProvider>
  );
};
