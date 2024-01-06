import BlackholeVideo from "../assets/blackhole.webm";

export default function BlackHole() {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute left-0 w-full -translate-y-1/2 rotate-180 object-cover  lg:-translate-y-[38.5%]"
    >
      <source src={BlackholeVideo} type="video/webm" />
    </video>
  );
}
