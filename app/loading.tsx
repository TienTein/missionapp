export default function Loading() {
  return (
    <main>
      <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
        <svg
          className="animate-spin h-[200px] w-[200px] mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </main>
  );
}
