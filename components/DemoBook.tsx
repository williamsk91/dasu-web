export const DemoBook = () => {
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
