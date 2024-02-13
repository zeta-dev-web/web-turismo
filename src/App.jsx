import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import FoodScreen from "./views/FoodScreen";
import ExploreScreen from "./views/ExploreScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="LugaresTuristicos" element={<ExploreScreen />} />
        <Route path="Gastronomia" element={<FoodScreen />} />
        <Route path="Contacto" element={<ContactScreen />} />
        {/* <Route path="/" element={<FoodScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;