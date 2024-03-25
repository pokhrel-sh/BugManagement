import Home from "./pages/home";
import Database from "./pages/database";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contents/themeContext";
import Layout from "./layout/layouts";

const AppRoute = () => {
  return (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<Database />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
};

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
