import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import HomeScreen from "./views/HomeScreen";
import FoodScreen from "./views/FoodScreen";
import ExploreScreen from "./views/ExploreScreen";
import UbiScreen from "./views/UbiScreen";
import TransportScreen from "./views/TransportScreen";
import ErrorScreen from "./views/ErrorScreen";
import EventsScreen from "./views/EventsScreen";
import ServiceScreen from "./views/ServiceScreen";

function App() {
  return (
    <BrowserRouter>
    <div className="vh-100 d-flex flex-column justify-content-between">
    <NavbarApp></NavbarApp>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="LugaresTuristicos" element={<ExploreScreen />} />
        <Route path="Gastronomia" element={<FoodScreen />} />
        <Route path="Comollegar" element={<UbiScreen />} />
        <Route path="EventosLocales" element={<EventsScreen />} />
        <Route path="Servicios" element={<ServiceScreen/>} />
        <Route path="HorariosdeColectivos" element={<TransportScreen />} />
        <Route path="/*" element={<ErrorScreen/>} />
      </Routes>
      <FooterApp></FooterApp>
      </div>
    </BrowserRouter>
  );
}

export default App;