import React, { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Links() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Popover className="bg-custom-black1 relative flex flex-wrap items-center justify-center rounded-full">
      <PopoverButton
        className="inline-flex w-fit cursor-pointer justify-center rounded-full p-2 outline-none"
        onClick={isOpenToggle}
      >
        {isOpen ? (
          <box-icon name="x" color="white" size="sm" />
        ) : (
          <box-icon name="link" color="white" size="sm" />
        )}
      </PopoverButton>
      <PopoverPanel
        transition
        className="origin-bottom-center absolute bottom-0 z-[-1] mb-10 rounded-md p-1 transition outline-none data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="bg-custom-black1 flex flex-col items-center gap-1 rounded-xl px-1 py-3">
          <a
            href="https://github.com/Draken1003?tab=repositories"
            target="_blank"
          >
            <box-icon
              type="logo"
              name="github"
              color="white"
              size="md"
            ></box-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/helder-esteves-b45088338/"
            target="_blank"
          >
            <box-icon
              type="logo"
              name="linkedin-square"
              color="white"
              size="md"
            />
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
