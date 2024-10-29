'use client';
import React from 'react';
import { Github, Linkedin, Send } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-8 text-xs">
          <a
            className="block hover:text-slate-200 transition ease-in-out duration-100"
            href="https://github.com/lowgy"
            target="_blank"
            rel="noreferrer noopener"
            id="Github link"
          >
            <Github className="text-slate-400 hover:text-slate-200 h-7 w-7" />
          </a>
        </li>
        <li className="mr-8 text-xs">
          <a
            className="block hover:text-slate-200 transition ease-in-out duration-100"
            href="https://www.linkedin.com/in/loganolson/"
            target="_blank"
            rel="noreferrer noopener"
            id="Linkedin link"
          >
            <Linkedin className="text-slate-400 hover:text-slate-200 h-7 w-7" />
          </a>
        </li>
        <li>
          <a
            className="block hover:text-slate-200 transition ease-in-out duration-100"
            href="mailto:loganolsonn@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            id="Email link"
          >
            <Send className="text-slate-400 hover:text-slate-200 h-7 w-7" />
          </a>
        </li>
      </ul>
    </div>
  );
}
