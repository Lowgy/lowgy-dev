'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
];

export default function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const handleNavClick = (key: number) => {
    setActiveSection(key);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      if (sections) {
        if (
          sections[0].offsetTop <= scrollPosition + 100 &&
          sections[0].offsetTop + sections[0].offsetHeight >
            scrollPosition + 100
        ) {
          setActiveSection(0);
        } else if (
          sections[1].offsetTop <= scrollPosition + 100 &&
          sections[1].offsetTop + sections[1].offsetHeight >
            scrollPosition - 100
        ) {
          setActiveSection(1);
        }
      }
    };

    if (!clicked) {
      window.addEventListener('scroll', scrollHandler);
    }

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <nav className="nav hidden lg:block">
      <div className="relative mt-10">
        <ul className="w-max flex">
          {navItems.map((item, key) => (
            <li
              key={item.name}
              className={`${
                key === activeSection ? ' active' : ''
              } group text-slate-500 pr-10`}
            >
              <Link href={item.link} onClick={() => handleNavClick(key)}>
                <span className="text-xs font-bold uppercase tracking-widest hover:text-slate-200 transition ease-in-out duration-200">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <div className="mover w-max flex"></div>
        </ul>
      </div>
    </nav>
  );
}
