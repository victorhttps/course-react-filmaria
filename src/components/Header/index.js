import './header.css';
import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

export default function Header() {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  return (
    <>
      <header className="header-section d-none d-xl-block">
        <Link className="logo" to="/">
          Filmaria
        </Link>
        <Link className="favoritos" to="/favoritos">
          Salvos
        </Link>
      </header>
    </>
  );
}
