import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
import Error from "./Error";
import ToggleButton from "./ToggleButton";

function App() {
  return (
    <>
      <ToggleButton />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:id" element={<Movie />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
