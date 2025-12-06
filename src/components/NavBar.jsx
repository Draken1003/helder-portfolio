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
    <nav className="md:left:0 md:right:0 fixed top-6 right-5 left-5 z-1000 flex justify-between md:mx-auto md:w-auto md:max-w-max md:justify-center md:gap-[5px]">
      <div className="md:bg-custom-black flex w-full max-w-7xl flex-wrap items-center justify-between rounded-lg md:mx-auto md:px-5 md:py-3">
        <a
          href={home.id}
          className="font-family-title bg-custom-black rounded-lg px-6 py-3 text-white md:px-0 md:py-0"
          aria-current="page"
        >
          {home.title}
        </a>
        <Toggle onClick={toggleMenu} isOpen={isOpen} />
        <div
          className={`bg-custom-black mt-5 w-full rounded-lg px-6 py-3 md:mt-0 md:block md:w-auto md:px-0 md:py-0 ${isOpen ? "block" : "hidden"} `}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col justify-between gap-4 border-l-0 border-l-[#333333] md:mt-0 md:ml-6 md:flex-row md:items-center md:border-l-2 md:pl-6">
            {/* NavItems */}
            {newNavItems.map((navItem, index) => (
              <li key={index}>
                <a
                  href={navItem.id}
                  className="hover:text-custom-red block rounded-sm px-3 py-2 text-white md:border-0 md:p-0 md:hover:bg-transparent"
                >
                  {navItem.title}
                </a>
              </li>
            ))}

            {/* Contact button */}
            <li className="w-full md:w-auto">
              <a
                href={contact.id}
                className="flex items-center justify-between gap-2.5 rounded-lg bg-[black] pt-[.38rem] pr-3 pb-[.38rem] pl-[1.37rem] text-white md:hidden md:w-auto"
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
        className="bg-custom-black hidden items-center gap-2.5 rounded-lg pt-2 pr-3 pb-2 pl-[1.37rem] text-white md:flex"
      >
        {contact.title}
        <div className="rounded-xl bg-[#252526]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-custom-red text-custom-black h-8 w-8 rounded-sm p-[.56rem]"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403806 5.98959 0.403806 5.6967 0.696699C5.40381 0.989593 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6V6.75H11V6V5.25H1V6Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </a>
    </nav>
  );
}

const ArrowButton = () => {
  return (
    <div className="bg-custom-black z-1 rounded-l">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bg-custom-red text-custom-black h-8 w-8 rounded-sm p-[.56rem]"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403806 5.98959 0.403806 5.6967 0.696699C5.40381 0.989593 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6V6.75H11V6V5.25H1V6Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};
