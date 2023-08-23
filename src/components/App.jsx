import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? darkTheme : lightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
