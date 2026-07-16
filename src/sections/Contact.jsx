import { useRef } from "react";
import Section, { SectionHeader } from "../components/global/Section";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "held.esteves@gmail.com";
const EMAIL_SENT_MESSAGE = "Message envoyé avec succès !";
const EMAIL_ERROR_MESSAGE = "Une erreur est survenue. Réessayez plus tard.";

const CONTACT_FIELDS = [
  { type: "text", name: "from_name", placeholder: "Nom" },
  { type: "email", name: "from_email", placeholder: "Email" },
  { type: "text", name: "title", placeholder: "Objet" },
];

function ContactInput(props) {
  return (
    <input
      className="text-gray1 font-general-regular border-gray2 w-full border bg-transparent p-2"
      {...props}
    />
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      className="relative flex min-h-fit flex-col items-center overflow-hidden px-7 pb-0"
    >
      <img
        src={`${import.meta.env.BASE_URL}/assets/svg/shape7.svg`}
        className="bg-shape top-2/3 -left-50"
        alt=""
      />

      <SectionHeader title="Contactez moi" iconSrc="/assets/svg/shape8.svg">
        <Form />
      </SectionHeader>

      <div className="mt-10 w-screen">
        <p className="font-clash-semibold text-orange text-center text-2xl">
          {CONTACT_EMAIL}
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

function Form() {
  const formRef = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      alert(EMAIL_SENT_MESSAGE);
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS failed", error);
      alert(EMAIL_ERROR_MESSAGE);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="border-gray2 flex flex-col items-center gap-5 border p-5"
    >
      {CONTACT_FIELDS.map((field) => (
        <ContactInput key={field.name} {...field} required />
      ))}

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
}
