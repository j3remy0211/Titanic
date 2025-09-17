import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TitanicApp } from "./components/TitanicApp";
import { PassengerStories } from "./components/PassengerStories";
import { TechnicalSpecs } from "./components/TechnicalSpecs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <TitanicApp />
              <PassengerStories />
              <TechnicalSpecs />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;