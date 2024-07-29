import BackgroundVideo from "next-video/background-video";
import getStarted from "/videos/Infovideo.mp4";

export function Bakgrunnsbilde() {
  return (
    <BackgroundVideo placeholder="blur" src={getStarted} loop muted autoPlay />
  );
}
