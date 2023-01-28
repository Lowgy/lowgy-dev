import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="py-4 bg-gray-900">
      <div className="container mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold md:pr-10">lowgy.dev</div>
          <div className="text-lg font-bold">Copyright © 2023</div>
          <div className="flex space-x-12 items-center">
            <Link
              href="https://www.github.com/lowgy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              {' '}
              <FaGithub size={24} />{' '}
            </Link>
            <Link
              href="https://www.linkedin.com/in/loganolson/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              {' '}
              <FaLinkedin size={24} />{' '}
            </Link>
            <Link
              href="https://twitter.com/lowgy_dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              {' '}
              <FaTwitter size={24} />{' '}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
