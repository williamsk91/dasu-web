export const DemoBook = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <iframe
        id="inlineFrameExample"
        title="Dasu demo book"
        className="w-full h-[75vh] border-4 rounded-lg"
        src={process.env.DEMO_URL}
      />
      <a
        href={process.env.DEMO_URL}
        className="text-center rounded-lg border border-black bg-black text-white text-xl py-4 px-8 mt-2 transition hover:bg-white hover:text-black"
      >
        Visit
      </a>
    </div>
  );
};
