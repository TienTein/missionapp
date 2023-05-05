import MissionVideo from "./components/MissionVideo";
import RelatedVideos from "./components/RelatedVideos";

export default function Video() {
  return (
    <div>
      <MissionVideo />
      <div className="w-full flex justify-around bg-[#FCB711] bg-opacity-60">
        <RelatedVideos />
      </div>
    </div>
  );
}
