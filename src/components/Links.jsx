import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
//import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Links() {
  return (
    <Popover className="bg-custom-black relative flex flex-wrap items-center justify-center rounded-full">
      <PopoverButton className="inline-flex w-fit cursor-pointer justify-center rounded-full p-3 outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          clipRule="evenodd"
          fill="var(--color-custom-white)"
          viewBox="0 0 512 512"
        >
          <path d="M476.335 35.664v.001c47.554 47.552 47.552 125.365.002 172.918l-101.729 101.73c-60.027 60.025-162.073 42.413-194.762-32.45 35.888-31.191 53.387-21.102 87.58-6.638 20.128 8.512 43.74 3.955 60.08-12.387l99.375-99.371c21.49-21.493 21.492-56.662 0-78.155-21.489-21.488-56.677-21.472-78.151 0l-71.278 71.28c-23.583-11.337-50.118-14.697-75.453-10.07a121.476 121.476 0 0118.767-24.207l82.651-82.65c47.554-47.551 125.365-47.555 172.918-.001zM35.664 476.334l.001.001c47.554 47.552 125.365 47.552 172.917 0l85.682-85.682a121.496 121.496 0 0019.325-25.157c-27.876 6.951-57.764 4.015-83.932-8.805l-70.192 70.19c-21.472 21.471-56.658 21.492-78.149 0-21.492-21.491-21.493-56.658 0-78.149l99.375-99.376c20.363-20.363 61.002-26.435 91.717 1.688 29.729-3.133 41.275-8.812 59.742-26.493-39.398-69.476-137.607-80.013-194.757-22.863L35.664 303.417c-47.552 47.553-47.552 125.364 0 172.917z" />
        </svg>
      </PopoverButton>
      <PopoverPanel
        transition
        className="origin-bottom-center absolute bottom-0 z-[-1] mb-10 rounded-md p-1 transition outline-none data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="bg-custom-black flex flex-col items-center gap-6 rounded-xl py-2">
          <a
            href="https://github.com/Draken1003?tab=repositories"
            target="_blank"
          >
            <img
              src="/src/asset/icons/tools/github.svg"
              className="h-[30px] w-[30px]"
              alt=""
            />
          </a>
          <a
            className="rounded-2xl p-2"
            href="https://www.linkedin.com/in/helder-esteves-b45088338/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="white"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray="0"
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
