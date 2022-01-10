export const DemoBook = () => {
  return (
    <div className="w-full">
      <iframe
        id="inlineFrameExample"
        title="Dasu demo book"
        className="w-full h-[75vh] border-4 rounded-lg"
        src={process.env.DEMO_URL}
      />
      <button className="rounded-lg border border-black bg-black text-white text-xl py-4 px-6 mt-2 transition hover:bg-white hover:text-black">
        Visit
      </button>
    </div>
  );
};
