import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
// import 'bootstrap/dist/css/bootstrap.css';
import styles from "./App.module.css";
import Vehicles from "./Components/Vehicles/Vehicles";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Sidebar/Navbar";
import styled, { ThemeProvider } from "styled-components";
import useDarkMode from "./Components/styles/useDarkMode";
import Toggle from "./Components/Toggle";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from "./Components/styles/GlobalStyles";

const App = () => {
  // const [view, setView] = React.useState(0);
  // const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  // const home = () => setView(0);
  // const vehicles = () => setView(1);

  // const switchModes = (mode) => {
  //   if (mode === "light") {
  //     setIsDarkModeActive(false);
  //   } else if (mode === "dark") {
  //     setIsDarkModeActive(true);
  //   }
  // };
  {
    /* <div className={styles.main} >
        <div>
          <Sidebar home={home} vehicles={vehicles} />
        </div>
        <div className={styles.right} >
          {view === 0 ? (
            <Home />
          ) : (
            <Vehicles />
          )}
        </div>
      </div> */
  }

  const location = useLocation();
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <AnimatePresence>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </ThemeProvider>
    </AnimatePresence>
  );
};

export default App;
