'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Typer() {
  return (
    <TypeAnimation
      sequence={['Developer', 1000, 'ReactJS Lover', 1000, 'Student', 1000, '']}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', color: 'red' }}
    />
  );
}
