import React, { useState } from "react";
import Toggle from "./Toggle";

export default function NavBar({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const home = navItems[0];
  const lastIndex = navItems.length - 1;
  const contact = navItems[lastIndex];

  const newNavItems = navItems.filter((item, index) => {
    return index !== 0 && index !== lastIndex;
  });

  // Fonction pour basculer l'état (ouvrir/fermer)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-6 right-5 left-5 z-1000 flex text-white md:mx-auto md:max-w-max md:gap-1">
      {/* Left Part */}
      <div className="md:bg-custom-black1 flex w-full flex-wrap justify-between rounded-lg md:px-5 md:py-3">
        {/* Esteves Helder */}
        <a
          href={home.id}
          className="font-family-title bg-custom-black1 rounded-lg px-6 py-3 md:px-0 md:py-0"
        >
          {home.title}
        </a>
        {/* Burger Menu for the responsive */}
        <Toggle onClick={toggleMenu} isOpen={isOpen} />
        <div
          className={`bg-custom-black1 mt-5 w-full rounded-lg px-6 py-3 md:mt-0 md:block md:w-auto md:px-0 md:py-0 ${isOpen ? "block" : "hidden"} `}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col justify-between gap-4 border-l-0 border-l-[#333333] md:mt-0 md:ml-6 md:flex-row md:items-center md:border-l-2 md:pl-6">
            {/* NavItems */}
            <NavItems items={newNavItems} />

            {/* Contact button for responsive design */}
            <li className="w-full md:w-auto">
              <a
                href={contact.id}
                className="bg-custom-black flex items-center justify-between gap-2.5 rounded-lg pt-[.38rem] pr-3 pb-[.38rem] pl-[1.37rem] md:hidden md:w-auto"
              >
                {contact.title}
                <ArrowButton />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        href={contact.id}
        className="bg-custom-black1 hidden items-center gap-2.5 rounded-lg pr-2 pl-4 md:flex"
      >
        {contact.title}
        <ArrowButton />
      </a>
    </nav>
  );
}

const NavItems = ({ items }) => {
  return items.map((navItem, index) => (
    <li key={index}>
      <a href={navItem.id} className="hover:text-custom-red">
        {navItem.title}
      </a>
    </li>
  ));
};

const ArrowButton = () => {
  return (
    <div className="bg-custom-red flex rounded-sm p-1">
      <box-icon name="right-arrow-alt" />
    </div>
  );
};
