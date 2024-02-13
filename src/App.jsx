import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import HomeScreen from "./views/HomeScreen";
import ContactScreen from "./views/ContactScreen";
import FoodScreen from "./views/FoodScreen";
import ExploreScreen from "./views/ExploreScreen";
import UbiScreen from "./views/UbiScreen";
import TransportScreen from "./views/TransportScreen";
import ErrorScreen from "./views/ErrorScreen";

function App() {
  return (
    <BrowserRouter>
    <NavbarApp></NavbarApp>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="LugaresTuristicos" element={<ExploreScreen />} />
        <Route path="Gastronomia" element={<FoodScreen />} />
        <Route path="Comollegar" element={<UbiScreen />} />
        <Route path="HorariosdeColectivos" element={<TransportScreen />} />
        <Route path="Contacto" element={<ContactScreen />} />
        <Route path="/*" element={<ErrorScreen/>} />
      </Routes>
      <FooterApp></FooterApp>
    </BrowserRouter>
  );
}

export default App;