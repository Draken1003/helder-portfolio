import Section from "../components/global/Section";

export default function Hero() {
  return (
    <Section id="accueil" className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="font-general-medium">Esteves Helder</h2>
        <h1 className="font-general-bold text-center text-[6rem] leading-25 tracking-tighter uppercase md:text-[8rem] md:leading-30">
          Dev. <br /> <span className="text-orange">Junior</span> <br /> but 2{" "}
          <br /> info.
        </h1>
      </div>
    </Section>
  );
}
