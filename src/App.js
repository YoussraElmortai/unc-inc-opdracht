// App component
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
