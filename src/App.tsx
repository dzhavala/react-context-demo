import React from "react";
import { AppContextProvider } from './context/AppContext';
import ThemeWrapper from "./containers/ThemeWrapper";
import Todos from "./containers/Todos";
import AddTodo from "./containers/AddTodos";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
        <div className="App">
          <ThemeWrapper>
            <AddTodo />
            <Todos />
          </ThemeWrapper>
        </div>
      </AppContextProvider>
  );
}

export default App;
