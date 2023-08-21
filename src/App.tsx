// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import ExchangeList from "./components/ExchangeList";
import ExchangeDetails from "./components/ExchangeDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExchangeList />} />
        <Route path="/exchanges/:id" element={<ExchangeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
