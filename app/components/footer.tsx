import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="py-4 bg-gray-900">
      <div className="container mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold pr-10">lowgy.dev</div>
          <div className="text-lg font-bold">Copyright 2023</div>
          <div className="flex space-x-12 items-center">
            <a href="">
              {' '}
              <FaGithub size={24} />{' '}
            </a>
            <a href="">
              {' '}
              <FaLinkedin size={24} />{' '}
            </a>
            <a href="">
              {' '}
              <FaTwitter size={24} />{' '}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
