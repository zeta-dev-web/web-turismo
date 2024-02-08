import { react, useEffect, useState } from "react";
import "../App.css";
import NavbarApp from "../components/NavbarApp";
import CarouselApp from "../components/CarouselApp";
import FooterApp from "../components/FooterApp";

const HomeScreen = () => {
  return (
    <div className="vh-100">
      <NavbarApp />
      <CarouselApp />
      <FooterApp />
    </div>
  );
};
export default HomeScreen;
