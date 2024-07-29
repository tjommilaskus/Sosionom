import BackgroundVideo from "next-video/background-video";
import getStarted from "/videos/Infovideo-2.mp4";

export function Bakgrunnsbilde() {
  return (
    <BackgroundVideo
      placeholder="blur"
      src={getStarted}
      loop
      muted
      thumbnailTime={3}
    />
  );
}
