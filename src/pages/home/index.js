import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./style.css";

export default function Home() {
  return (
    <>
      <div className="content">
        <h1>Lorem Ipsum</h1>
        <button>Galeria</button>
        <button>Sobre</button>
      </div>
      <footer>
        <text>Contato</text>
        <div className="contact">
          <Link className="linked">
            <FaWhatsapp size={40} color="#000000" />
          </Link>
          <Link className="linked">
            <FaInstagram size={40} color="#000000" />
          </Link>
        </div>
      </footer>
    </>
  );
}
