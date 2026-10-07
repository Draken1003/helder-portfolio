import Section from "../components/global/Section";

export default function Hero() {
  return (
    <Section
      id="accueil"
      className="relative flex items-center justify-center select-none"
    >
      <div className="absolute inset-0 z-[-1] h-full w-full overflow-hidden">
        <video
          className="size-full object-cover brightness-80 grayscale"
          src={`${import.meta.env.BASE_URL}assets/video/hero_bg_video.mp4`}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-general-medium">Esteves Helder</h2>
        <h1 className="font-general-bold text-center text-[6rem] leading-25 tracking-tighter uppercase md:text-[8rem] md:leading-30">
          Dev. <br /> <span className="text-orange">Junior</span> <br /> BUT
          <br /> info.
        </h1>
      </div>
    </Section>
  );
}
