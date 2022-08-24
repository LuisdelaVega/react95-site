import { ThemeProvider, GlobalStyle } from "@react95/core";
import { Computer } from "@react95/icons";

import { Shortcut, TaskBar } from "./components";

import "@react95/icons/icons.css";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Shortcut icon={Computer} title="My Computer" />
      <TaskBar />
    </ThemeProvider>
  );
}

export default App;
