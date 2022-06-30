import { FC, PropsWithChildren } from "react";
import { Theme, useThemeContext } from "../context/themeContext";

export const ThemeWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { state, setTheme } = useThemeContext();

  return (
    <div
      data-theme={state.theme}
      onClick={() => {
        setTheme(state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
      }}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
