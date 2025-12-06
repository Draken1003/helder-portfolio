import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Decoration from "../components/commons/Decoration";
import Button from "../components/commons/Button";

export default function Contact({ navItems }) {
  const [navItemsCopy, setNavItemsCopy] = useState(
    navItems.map((item) => ({ ...item })),
  );
  navItemsCopy[0].title = "Accueil";

  const newNavItems = navItemsCopy.filter((item, index) => {
    return index !== navItemsCopy.length - 1;
  });

  return (
    <div
      id="contact-section"
      className="bg-custom-gray border-custom-red relative border-t-5 sm:h-screen"
    >
      <Decoration
        position={"top"}
        texts={["Contactez", "Moi", "Ici"]}
        section="contact"
        absolute={true}
      />
      <div className="grid h-full auto-rows-auto sm:mx-10 sm:auto-cols-fr sm:grid-flow-col sm:px-10">
        {/* Colonne 1 */}
        <div className="hidden h-full items-center sm:flex">
          <NavBarContact newNavItems={newNavItems} />
        </div>
        {/* Colonne 2 */}
        <div className="bg-custom-darkred border-custom-red grid auto-rows-auto gap-10 border-y pt-15 pb-5 text-white sm:grid-rows-3 sm:gap-0 sm:border-x sm:border-y-0 sm:pt-0">
          <Form />
          <Links />
        </div>
        {/* Colonne 3 */}
        <div className="hidden h-auto min-h-fit flex-col items-center justify-center px-10 pb-5 text-white sm:mx-10 sm:flex">
          <div className="text-md flex flex-col items-end font-bold">
            {/* <p>
              Inspired by{" "}
              <a href="http://www.heimdallpower.com" target="_blank">
                www.heimdallpower.com
              </a>
            </p>
            <p className="text-custom-gray bg-custom-red w-fit px-1">
              Made by Refokus
            </p> */}
          </div>
          <div className="flex h-full w-full sm:hidden sm:items-center">
            <NavBarContact newNavItems={newNavItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

const NavBarContact = ({ newNavItems }) => {
  console.log(newNavItems);
  return (
    <ul className="flex flex-col gap-2 text-white">
      {/* NavItems */}
      {newNavItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.id}
            className="hover:text-custom-red text-2xl font-bold transition-all"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Une erreur est survenue. Réessayez plus tard.");
        },
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="row-span-2 mx-10 flex h-fit flex-col items-center gap-5 self-end"
    >
      <div className="flex w-full flex-col">
        <label>Nom</label>
        <input
          className="bg-custom-white text-custom-gray p-1"
          type="text"
          name="from_name"
          required
        />
        <br />
        <label>Email</label>
        <input
          className="bg-custom-white text-custom-gray p-1"
          type="email"
          name="from_email"
          required
        />
        <br />
        <label>Objet</label>
        <input
          className="bg-custom-white text-custom-gray p-1"
          type="text"
          name="title"
          required
        />
        <br />
        <label>Message</label>
        <textarea
          className="bg-custom-white text-custom-gray max-h-30 min-h-15 p-1"
          name="message"
          style={{ resize: "vertical" }}
          required
        />
      </div>
      <div className="bg-custom-red h-fit w-full cursor-pointer rounded-md p-0.5">
        <input
          type="submit"
          className="bg-custom-gray w-full cursor-pointer rounded-xl px-8 py-2 font-bold text-white"
          value="Envoyer"
        />
      </div>
    </form>
  );
};

const Links = () => {
  return (
    <div className="text-custom-red row-start-3 mx-10 flex flex-col items-center gap-2 self-end text-xs">
      <div className="bg-custom-red flex w-full items-center justify-center rounded-lg px-10 sm:w-fit">
        <a
          href="https://github.com/Draken1003?tab=repositories"
          target="_blank"
        >
          <img
            src="/src/asset/icons/tools/github.svg"
            className="size-7"
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
            className="size-7"
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
      <p className="hidden sm:block">&copy; Made by Esteves Helder</p>
    </div>
  );
};
