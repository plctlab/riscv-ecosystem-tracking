import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/home/Home";
import Banner from "./components/banner/Banner";
import React from "react";
import SearchByDevice from "./components/modes/SearchByDevice";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Banner />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path={'/searchByDevice'} element={<SearchByDevice />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
