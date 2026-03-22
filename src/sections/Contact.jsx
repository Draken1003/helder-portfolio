import { useRef } from "react";
import Section, { SectionHeader } from "../components/global/Section";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <Section
      id="contact"
      className={
        "relative flex min-h-fit flex-col items-center overflow-hidden px-7 pb-0"
      }
    >
      <img
        src="/assets/svg/shape7.svg"
        className="bg-shape top-2/3 -left-50"
        alt=""
      />

      <SectionHeader title={"Contactez moi"} iconSrc={"/assets/svg/shape8.svg"}>
        <div>
          <Form />
        </div>
      </SectionHeader>
      <div className="mt-10 w-screen">
        <p className="font-clash-semibold text-orange text-center text-2xl">
          held.esteves@gmail.com
        </p>
        <div className="footer-text mt-10 uppercase">
          <span className="block sm:inline">Esteves&nbsp;</span>
          <span className="block sm:inline">
            Helder<span className="text-orange">.</span>
          </span>
        </div>
      </div>
    </Section>
  );
}

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

  const Input = ({ ...props }) => {
    return (
      <input
        className="text-gray1 font-general-regular border-gray2 w-full border bg-transparent p-2"
        {...props}
      />
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="border-gray2 flex flex-col items-center gap-5 border p-5"
    >
      <Input type="text" name="from_name" placeholder="Nom" required />
      <Input type="email" name="from_email" placeholder="Email" required />
      <Input type="text" name="title" placeholder="Objet" required />
      <textarea
        className="border-gray2 text-gray1 font-general-regular h-50 w-full border p-2"
        name="message"
        placeholder="Message"
        style={{ resize: "none" }}
        required
      />
      <button
        type="submit"
        className="bg-orange! w-full p-2 text-black uppercase"
      >
        Envoyer
      </button>
    </form>
  );
};
