'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link2 } from 'lucide-react';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
  isLink,
  alt,
}: ProjectProps) {
  return (
    <div className="mb-6 sm:mb-8 last:mb-0 sm:h-64">
      <Link
        href={link}
        target={isLink ? '_blank' : '_self'}
        rel="noreferrer noopener"
        className="group"
      >
        <div className="h-full rounded-xl relative flex flex-col-reverse sm:flex-row group">
          <div className="pt-4 pb-7 px-5 sm:w-[50%] sm:px-0 sm:py-0 sm:my-auto sm:flex sm:flex-col group">
            <div className="flex text-lg text-slate-200 font-semibold group">
              <div className="sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500">
                {title}
              </div>
              <Link2 className="inline h-4 w-4 ml-2 -mt-1 text-slate-200 sm:group-hover:text-[#a3b4f6] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </div>
            <div className="text-sm mt-2 text-slate-400 sm:mr-5">
              {description}
            </div>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-[#7a92f0]/15 px-3 py-1 text-[0.65rem] font-medium tracking-wider text-[#a3b4f6] rounded-md"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-10 sm:p-0 sm:w-[calc(50%-8px)] group aspect-[5/3] sm:aspect-[4/3] relative my-auto rounded-lg">
            <Image
              src={imageUrl}
              alt={alt}
              quality={100}
              layout="fill"
              className="object-cover aspect-[4/3] rounded-lg sm:group-hover:scale-105 transition ease-in-out duration-500"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <p className="text-slate-200 text-s font-bold mb-4 ">Projects</p>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
