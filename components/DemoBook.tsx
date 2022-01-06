export const DemoBook = () => {
  console.log("process.env.DEMO_URL: ", process.env.DEMO_URL);
  return (
    <div className="w-full">
      <iframe
        id="inlineFrameExample"
        title="Dasu demo book"
        className="w-full h-[75vh] border-4 rounded-lg"
        src={process.env.DEMO_URL}
      />
    </div>
  );
};
