import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="bg-[#161625] z-10 px-40 p-4 text-white fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-500">Ahmad Hamsa Pattuneri</h1>
        <nav className="space-x-8">
          {["Home", "About me", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.replace(" ", "").toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`hover:text-indigo-500 ${
                activeLink === link ? "text-indigo-500" : "text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
