import VideoItem from "./components/VideoItem";

export default function Video() {
  return (
    <div>
      <VideoItem />
      <div className="w-full py-[5vh] flex justify-around bg-[#FCB711] [&>*>p]:font-bold [&>*>span]:block [&>*>span]:mb-4 [&>*>span]:text-6xl [&>*>span]:font-reggaeone">
        <div>
          <span>90</span>
          <p>Tasty Dishes</p>
        </div>
        <div>
          <span>90</span>
          <p>Tasty Dishes</p>
        </div>
        <div>
          <span>90</span>
          <p>Tasty Dishes</p>
        </div>
        <div>
          <span>90</span>
          <p>Tasty Dishes</p>
        </div>
      </div>
    </div>
  );
}
